<template>
  <div class="home-container">
    <v-container>
      <v-row>
        <v-col
          v-for="category in categories"
          :key="category.id"
          cols="12"
          md="4"
        >
          <v-card class="category-card" elevation="10">
            <v-icon icon="mdi-domain" size="x-large" end="true" ></v-icon>
            <v-card-title class="category-title">{{ category.name }}</v-card-title>
            <v-card-subtitle class="category-description">{{ category.description }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="primary" @click="selectCategory(category)">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-snackbar v-model="snackbar.visible" :color="snackbar.color">
    {{ snackbar.text }}
    <v-btn dark text @click="snackbar.visible = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { listCategories } from '@/services/api';

export default defineComponent({
  setup() {
    const categories = ref([]);
    const snackbar = ref({
      visible: false,
      text: '',
      color: '',
    });

    const fetchCategories = async () => {
      try {
        const response = await listCategories();
        console.log(categories)
        categories.value = response.data;
      } catch (error) {
        snackbar.value = {
          visible: true,
          text: 'Failed to load categories.',
          color: 'error',
        };
      }
    };

    const selectCategory = (category) => {
      // Implement navigation or actions for selected category
      snackbar.value = {
        visible: true,
        text: `You selected ${category.name}.`,
        color: 'success',
      };
    };

    onMounted(fetchCategories);

    return { categories, selectCategory, snackbar };
  },
});
</script>

<style scoped>
.home-container {
  padding: 20px;
  background: linear-gradient(135deg, #4f8db0, #27496d);
  min-height: 100vh;
}

.category-card {
  margin: 10px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-image {
  object-fit: cover;
}

.category-title {
  font-weight: bold;
  font-size: 18px;
}

.category-description {
  color: #555;
  font-size: 14px;
}
</style>
