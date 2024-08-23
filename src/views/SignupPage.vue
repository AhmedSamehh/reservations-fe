<template>
  <div class="signup-container">
    <v-card class="signup-card" elevation="10">
      <v-card-title class="text-h4">Join Us</v-card-title>
      <v-card-subtitle class="pb-5">Create your account</v-card-subtitle>
      <v-form @submit.prevent="handleSignup" class="signup-form">
        <v-text-field
          v-model="username"
          label="Username"
          prepend-inner-icon="mdi-account"
          outlined
          dense
          clearable
          required
        ></v-text-field>
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
          class="signup-button"
          :loading="loading"
          block
        >
          Sign Up
        </v-btn>
      </v-form>
      <v-card-actions class="signup-actions">
        <v-spacer></v-spacer>
        <v-btn text @click="goToLogin">Already have an account?</v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="3000" top>
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { signUp } from '@/services/api';
import router from '@/router';

export default defineComponent({
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const snackbar = ref({
      show: false,
      message: '',
      color: '',
    });

    const handleSignup = async () => {
      try {
        loading.value = true;
        await signUp({ username: username.value, email: email.value, password: password.value });
        router.push('/login')
        snackbar.value = { show: true, message: 'Sign Up Successful!', color: 'green' };
      } catch (error) {
        console.error(error);
        snackbar.value = { show: true, message: 'Error signing up.', color: 'red' };
      } finally {
        loading.value = false;
      }
    };

    const goToLogin = () => {
      router.push('/login');
    };

    return { username, email, password, loading, handleSignup, goToLogin, snackbar };
  },
});
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #8e44ad, #3498db);
}

.signup-card {
  width: 400px;
  padding: 20px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.signup-button {
  margin-top: 20px;
}

.signup-actions {
  margin-top: 10px;
  justify-content: space-between;
}

.v-btn--text {
  color: #8e44ad;
}
</style>
