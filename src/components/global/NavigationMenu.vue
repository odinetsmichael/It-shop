<script setup>

</script>

<template>
    <div class="nav-menu">
      <nav class="sidebar">

          <div class="avatar">
            <img src="https://i.pinimg.com/736x/cc/cc/4d/cccc4d3c17d97e05226c10c30d8d7689.jpg" alt="Avatar">
            <a href="#/settings" class="settings">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg>
            </a>
          </div>
          
          <ul class="nav flex-column mt-4">
            <li class="nav-item">
              <router-link to="/orders" class="nav-link">
                <span class="nav-item-content">
                   Приход
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/groups" class="nav-link">
                <span class="nav-item-content">
                   Группы
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">
                <span class="nav-item-content">
                   Продукты
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/users" class="nav-link">
                <span class="nav-item-content">
                   Пользователи
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/settings" class="nav-link">
                <span class="nav-item-content">
                  Настройки
                </span>
              </router-link>
            </li>
          </ul>

      </nav>
    </div>
</template>
  

  
  <style scoped lang="scss"> 
  @import '@/assets/main.scss'; 
  .nav-menu{
    position: sticky;
    width: 15%;
    z-index: 5;
    height: 100vh;
    background-color: $bg-grey;
    box-shadow: 12px 0 20px rgba(0, 0, 0, 0.1);
    .sidebar {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      .avatar{
        position: relative;
        margin-top: 40px;
        img{
          width: 80px;
          height: 80px;
          border-radius: 100%;
        }
        .settings{
          cursor: pointer;
          position: absolute;
          bottom: -1%;
          right: 0;
          width: 34px;
          height: 34px;
          border-radius: 100%;
          background-color: $bg-grey;
          box-shadow: 0px 0px 41px 0px rgba(0,0,0,0.56);
          svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            fill: $icon-grey;
          }
        }
      }
    }
  }

  
  .nav-link {
    color: $title-black;
    text-align: center; 
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
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
  