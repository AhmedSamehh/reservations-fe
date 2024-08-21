<template>
    <v-form @submit.prevent="handleSignup">
      <v-text-field v-model="username" label="Username" required></v-text-field>
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
      <v-btn type="submit" color="primary">Sign Up</v-btn>
    </v-form>
  </template>
  
  <script>
import { defineComponent, ref } from 'vue';
import { signUp } from '@/services/api';

export default defineComponent({
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const handleSignup = async () => {
      try {
        await signUp({ username: username.value, email: email.value, password: password.value });
        alert('Sign Up Successful!');
      } catch (error) {
        console.error(error);
        alert('Error signing up.');
      }
    };

    return { username, email, password, handleSignup };
  },
});
</script>

  