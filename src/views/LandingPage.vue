<template>
    <div class="landing-container">
      <div class="landing-content">
        <h1 class="landing-title">Welcome to Your Next Adventure</h1>
        <p class="landing-subtitle">Join us to explore amazing services and more!</p>
        <div class="landing-buttons">
          <v-btn color="primary" class="landing-btn" @click="navigateToLogin">Log In</v-btn>
          <v-btn color="secondary" class="landing-btn" @click="navigateToSignup">Sign Up</v-btn>
        </div>
      </div>
      <div class="landing-animation">
        <!-- Add any cool animation here, like a spinning globe or a floating element -->
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import router from '@/router';
  
  export default defineComponent({
    setup() {
      const navigateToLogin = () => {
        router.push('/login');
      };
  
      const navigateToSignup = () => {
        router.push('/signup');
      };
  
      return { navigateToLogin, navigateToSignup };
    },
  });
  </script>
  
  <style scoped>
  .landing-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, #6a11cb, #2575fc); /* Use the colors from the login page */
  }
  
  .landing-content {
    text-align: center;
    color: white;
  }
  
  .landing-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    animation: fadeInDown 1s ease-in-out;
  }
  
  .landing-subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
    animation: fadeInUp 1s ease-in-out;
  }
  
  .landing-buttons {
    display: flex;
    gap: 20px;
    animation: fadeInUp 1.5s ease-in-out;
  }
  
  .landing-btn {
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 8px;
  }
  
  .landing-animation {
    margin-top: 50px;
    animation: bounce 2s infinite;
  }
  
  /* Add your animations */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  </style>
  