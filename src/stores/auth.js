import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'
import { UsersService } from '@/services'

export const useAuth = defineStore("user", () => {
  const state = useStorage("state_user", {
    isLogged: false,
    user: {
      id: "",
      name: "",
      email: "",
    },
    token: "",
    refresh: "",
    resetPasswordToken: "",
  });


  const isLogged = computed(() => {return state.isLogged;});
  const user = computed(() => state.value.user);
  const token = computed(() => state.value.token);
  const refresh = computed(() => state.value.refresh);

  const login = async (email, password) => {
    const response = await UsersService.login(email, password);
    state.value.token = response.data.token;
    state.value.refresh = response.data.refresh;
    state.value.isLogged = true;
  }

  const getUsers = async () => {
    const users = await UsersService.getUsers();
    return users;
  }

  const getUser = async () => {
    const user = await UsersService.getUserById(state.value.user.id);
    return user;
  }
  const deleteUser = async () => {
    await UsersService.deleteUser(state.value.user.id);
  }

  const createUser = async (user) => {
    await UsersService.createUser(user);
  }

  const updateUser = async (user) => {
    await UsersService.updateUser(user);
  }

  const logout = async () => {
    state.value.isLogged = false;
    state.value.token = "";
    state.value.refresh = "";
    state.value.user = {
      id: "",
      name: "",
      email: "",
    };
  }

  return { state, isLogged, user, token, refresh, getUser, deleteUser, login, logout, createUser, updateUser, getUsers };
});


