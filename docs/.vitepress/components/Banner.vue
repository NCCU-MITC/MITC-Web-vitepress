<template>
  <div class="banner">
    <div class="banner-overlay">
      <h1 class="banner-title">政大數理資訊社</h1>
      <p class="banner-subtitle">NCCU MITC</p>
    </div>
    <img src="/banner.jpg" alt="banner" class="banner-image" />
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style>
/* Banner container */
.banner {
  position: relative;
  width: 100%; /* Full page width */
  height: auto; /* Adjust as needed */
  background-color: rgb(28, 28, 28); /* Set background to black */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Fading Image Effect */
.banner-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  /* Gradient fade effect */
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  animation: fadeInRight 1s ease-out;
}

/* Overlay for text */
.banner-overlay {
  position: absolute;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-family: "Poppins", sans-serif;
  z-index: 2;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

/* Banner Title */
.banner-title {
  font-size: 48px;
  font-weight: bold;
  animation: fadeInUp 1s ease-out;
}

/* Subtitle */
.banner-subtitle {
  font-size: 20px;
  font-weight: 300;
  animation: fadeInUp 1.5s ease-out;
}

/* Smooth fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
