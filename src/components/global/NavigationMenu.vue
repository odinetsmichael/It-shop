<script setup>

</script>

<template>
    <div class="container-fluid nav-menu">
      <div class="row">

        <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">

          <div class="position-sticky">

            <div class="text-center mt-3">
              <img src="https://i.pinimg.com/736x/cc/cc/4d/cccc4d3c17d97e05226c10c30d8d7689.jpg" alt="Avatar" class="rounded-circle" style="width: 80px; height: 80px;">
            </div>
            
            <ul class="nav flex-column mt-4">
              <li class="nav-item">
                <router-link to="/orders" class="nav-link">
                  <div class="nav-item-content">
                    <i class="bi bi-house-door"></i> Приход
                  </div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/groups" class="nav-link">
                  <div class="nav-item-content">
                    <i class="bi bi-people"></i> Группы
                  </div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">
                  <div class="nav-item-content">
                    <i class="bi bi-box"></i> Продукты
                  </div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/users" class="nav-link">
                  <div class="nav-item-content">
                    <i class="bi bi-person"></i> Пользователи
                  </div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/settings" class="nav-link">
                  <div class="nav-item-content">
                    <i class="bi bi-gear"></i> Настройки
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
  

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Overview>
            <router-view></router-view>
          </Overview>
        </main>
      </div>
    </div>
  </template>
  

  
  <style scoped lang="scss">
  .sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: #F0F3F5;
    height: 100vh;
    overflow-y: auto;
    border-right: 1px solid #dee2e6;
    box-shadow: 12px 0 20px rgba(0, 0, 0, 0.1)
  }
  
  .nav-link {
    color: #36454D;
    text-align: center; 
    position: relative;
    padding-bottom: 35px; 
    cursor: pointer; 
  }
  
  .nav-item-content {
    position: relative;
    display: inline-block;
  }
  
  .nav-link .nav-item-content::before, .nav-link .nav-item-content::after {
    content: "";
    width: 100%;
    height: 3px; 
    background-color: #5C8E29;
    position: absolute;
    bottom: -8px; 
    left: 50%;
    transform: translateX(-50%) scaleX(0); 
    transform-origin: bottom center;
    transition: transform 0.3s ease; 
    opacity: 0; 
  }
  
  .nav-link:hover .nav-item-content::before, .nav-link:hover .nav-item-content::after {
    transform: translateX(-50%) scaleX(1);
    opacity: 1; 
  }
  
  </style>
  