<template>
  <nav class="menuLateral oculto" id="menuLateral">
    <a href="#information" class="enlaceMenuLateral"
      ><i class="fa-solid fa-file-lines"></i
    ></a>
  </nav>
</template>

<style>
.menuLateral {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 0;
  border-radius: 22px;
  padding: 1em 0.5em;
  gap: 1.5em;
  transform: translateY(-50%);
  color: white;
  margin-left: 0.5em;
  backdrop-filter: blur(20px);
  background-color: #14162560;
  transition: ease-in-out 200ms;
  min-height: 5em;
  z-index: 999;
}

.oculto {
  display: none !important;
  transform: translateX(-200%) !important;
  transition: ease-in-out 200ms;
}

.menuLateral a {
  color: white;
}

.menuLateral a {
  color: white;
  transition: ease-in-out 200ms;
  font-size: 1.7em;
}

.menuLateral a:hover {
  transform: scale(1.1);
  color: #f05454;
}

.menuActivo {
  color: #f05454;
}

@media (max-width: 700px) {
  .menuLateral {
    top: 90% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(30px);
    width: 80%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }
}
</style>