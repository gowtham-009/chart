<template>
  <div class="bg-muted-100 dark:bg-muted-900">
    <TairoWelcome />
    <div class=" px-24 py-10 w-full">
      <div class="w-full p-3 border-2 border-gray-500">
        <header>
          <nav class="flex w-full gap-3">
            <nuxt-link to="/pg-1" class="bg-blue-400 p-2 text-white " >page-1</nuxt-link>
            <nuxt-link to="/pg-2" class="bg-blue-400 p-2 text-white " >page-2</nuxt-link>
          </nav>
        </header>
      </div>
    </div>
  </div>
</template>
