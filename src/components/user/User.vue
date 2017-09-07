<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-link to="/user/1">/user/1</router-link>
    <router-link to="/user/1/profile">/user/1/profile</router-link>
    <router-link to="/user/1/posts">/user/1/posts</router-link>

    <router-link to="/user/2">/user/2</router-link>
    <router-link to="/user/2/profile">/user/2/profile</router-link>
    <router-link to="/user/2/posts">/user/2/posts</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
/* .container {
  width: 1200px;
  margin: 0 auto;
} */
.user {
  flex: 1;
  margin-bottom: -9999px;
  padding-bottom: 9999px;
}
</style>
