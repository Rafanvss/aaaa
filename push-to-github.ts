import { getUncachableGitHubClient } from './server/github-helper.js';
import { execSync } from 'child_process';

async function pushToGitHub() {
  try {
    console.log('🔗 Conectando ao GitHub...');
    const octokit = await getUncachableGitHubClient();
    
    // Get authenticated user
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`✅ Conectado como: ${user.login}`);
    
    // Create repository
    const repoName = 'guia-alimentacao-caes';
    console.log(`\n📦 Criando repositório: ${repoName}...`);
    
    try {
      const { data: repo } = await octokit.repos.createForAuthenticatedUser({
        name: repoName,
        description: 'Guia de Alimentação Saudável para Cães - Landing Page',
        private: false,
        auto_init: false
      });
      console.log(`✅ Repositório criado: ${repo.html_url}`);
      
      // Initialize git if needed
      try {
        execSync('git rev-parse --git-dir', { stdio: 'ignore' });
        console.log('\n📁 Repositório Git já existe');
      } catch {
        console.log('\n📁 Inicializando Git...');
        execSync('git init');
      }
      
      // Add all files
      console.log('📝 Adicionando arquivos...');
      execSync('git add .');
      
      // Commit
      console.log('💾 Fazendo commit...');
      try {
        execSync('git commit -m "Initial commit: Guia de Alimentação para Cães"');
      } catch (e) {
        console.log('ℹ️  Nada novo para commitar ou commit já existe');
      }
      
      // Add remote
      console.log('🔗 Configurando remote...');
      try {
        execSync(`git remote add origin ${repo.clone_url}`);
      } catch {
        execSync(`git remote set-url origin ${repo.clone_url}`);
      }
      
      // Push
      console.log('🚀 Enviando código para GitHub...');
      execSync('git branch -M main');
      execSync('git push -u origin main --force');
      
      console.log('\n✨ Sucesso! Seu projeto está no GitHub:');
      console.log(`🔗 ${repo.html_url}`);
      
    } catch (error: any) {
      if (error.status === 422) {
        console.log('ℹ️  Repositório já existe, atualizando...');
        const { data: repo } = await octokit.repos.get({
          owner: user.login,
          repo: repoName
        });
        
        // Update existing repo
        execSync('git add .');
        try {
          execSync('git commit -m "Update: Guia de Alimentação para Cães"');
        } catch {
          console.log('ℹ️  Nada novo para commitar');
        }
        
        try {
          execSync(`git remote set-url origin ${repo.clone_url}`);
        } catch {
          execSync(`git remote add origin ${repo.clone_url}`);
        }
        
        execSync('git branch -M main');
        execSync('git push -u origin main --force');
        
        console.log('\n✨ Projeto atualizado no GitHub:');
        console.log(`🔗 ${repo.html_url}`);
      } else {
        throw error;
      }
    }
    
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

pushToGitHub();
