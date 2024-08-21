<template>
    <div class="login-container">
      <v-card class="login-card" elevation="10">
        <v-card-title class="text-h5">Welcome Back</v-card-title>
        <v-card-subtitle>Log in to your account</v-card-subtitle>
        <v-form @submit.prevent="handleLogin" class="login-form">
          <v-text-field
            v-model="email"
            label="Email"
            prepend-inner-icon="mdi-email"
            outlined
            dense
            clearable
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            prepend-inner-icon="mdi-lock"
            outlined
            dense
            clearable
            required
          ></v-text-field>
          <v-btn
            type="submit"
            color="primary"
            class="login-button"
            :loading="loading"
            block
          >
            Log In
          </v-btn>
        </v-form>
        <v-card-actions class="login-actions">
          <v-btn text @click="forgotPassword">Forgot Password?</v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="signUp">Create Account</v-btn>
        </v-card-actions>
      </v-card>
  
      <!-- Snackbar for notifications -->
      <v-snackbar
        v-model="snackbar.show"
        :color="snackbar.type"
        :timeout="6000"
        bottom
        left
        class="snackbar"
      >
        {{ snackbar.message }}
        <v-btn text @click="snackbar.show = false" class="snackbar-close-btn">Close</v-btn>
      </v-snackbar>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { login } from '@/services/api';
  import router from '@/router';
  
  export default defineComponent({
    setup() {
      const email = ref('');
      const password = ref('');
      const loading = ref(false);
      const snackbar = ref({
        show: false,
        message: '',
        type: 'error', // Default type
      });
  
      const handleLogin = async () => {
        try {
          loading.value = true;
          await login({ email: email.value, password: password.value });
          snackbar.value = {
            show: true,
            message: 'Login Successful!',
            type: 'success',
          };
          router.push('/home'); // Redirect to home or dashboard
        } catch (error) {

          snackbar.value = {
            show: true,
            message: 'Error logging in. Please check your credentials.',
            type: 'error',
          };
        } finally {
          loading.value = false;
        }
      };
  
      const forgotPassword = () => {
        snackbar.value = {
          show: true,
          message: 'Forgot Password functionality not implemented.',
          type: 'info',
        };
      };
  
      const signUp = () => {
        router.push('/signup');
      };
  
      return { email, password, loading, snackbar, handleLogin, forgotPassword, signUp };
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .login-card {
    width: 400px;
    padding: 20px;
    border-radius: 12px;
  }
  
  .login-form {
    margin-top: 20px;
  }
  
  .login-button {
    margin-top: 20px;
  }
  
  .login-actions {
    margin-top: 10px;
    justify-content: space-between;
  }
  
  .snackbar {
    font-size: 16px; /* Adjust if needed */
  }
  
  .snackbar-close-btn {
    color: #af4646; /* Adjust the color of the close button text */
  }
  </style>
  