<template>
  <header class="header">
    <div class="container">
      <div class="header_wrap">
        <img src="@/assets/images/main-poster.png" alt="" class="header_img">
        <div class="header_offer">
          <h1 class="header_title">
            Интерьерные картины и постеры
          </h1>
          <div class="header_desc">
            Создавайте атмосферу и уют в доме и офисе с помощью наших картин. 
            Печать портретов, картин, постеров и репродукций на заказ    
          </div>
          <div class="header_btns">
            <a href="#search" class="btn header_btn">
              Выбрать картину
            </a>
            <a href="#" class="btn btn_secondary header_btn">
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section class="search" id="search">
    <div class="container">
      <div class="search_wrap">
        <input 
          type="text" 
          class="search_input" 
          placeholder="Поиск"
          v-model="search"
        >
        <button class="search_btn">
          <IconSearch />
        </button>
      </div>
      <div class="search_suggestions">
        <button 
          class="search_suggestion" 
          v-for="item in suggests" 
          :key="item.value"
          @click="search = item.value"
        >
          {{ item.value }}
        </button>
      </div> 
      <div class="search_results" v-if="images.length">
        <router-link :to="{name: 'detail', params: {id: image.id}}" class="search_results_item" v-for="image in images" :key="image.id">
          <img :src="image.assets.huge_thumb.url" alt="image">
        </router-link>
      </div>
      <button class="search_more" @click="loadMore()">
          <img src="@/assets/images/arrow-down.png" alt="arrow down">
          <span>
            ещё
          </span>
      </button>
    </div>
  </section>
</template>
<script setup>
import IconSearch from '../components/icons/IconSearch.vue';
import { ref, onMounted, reactive, watch } from 'vue';
import api from "../api"

const suggests = [
  {
    id: 1,
    value: 'Все'
  },
  {
    id: 2,
    value: 'Животные'
  },
  {
    id: 3,
    value: 'Цветы'
  },
  {
    id: 4,
    value: 'Пейзаж'
  },
  {
    id: 5,
    value: 'Абстракции'
  },
  {
    id: 6,
    value: 'Смола'
  },
  {
    id: 7,
    value: 'Акварель'
  },
  {
    id: 8,
    value: 'Натюрморт'
  },
  {
    id: 9,
    value: 'Постеры'
  },
  {
    id: 10,
    value: 'Авторские'
  },
  {
    id: 11,
    value: 'Модерн'
  },
  {
    id: 12,
    value: 'Классика'
  },
  {
    id: 13,
    value: 'Путешествия'
  },
  {
    id: 14,
    value: 'Архитектура'
  },
  {
    id: 15,
    value: 'Автомобили'
  },
  {
    id: 16,
    value: 'Макрофото'
  },
  {
    id: 17,
    value: 'Музыка и искусство'
  },
  {
    id: 18,
    value: 'Ретро и винтаж'
  },
  {
    id: 19,
    value: 'Еда и напитки'
  },
  {
    id: 20,
    value: 'Мода и красота'
  },
  {
    id: 21,
    value: 'В спальню'
  },
  {
    id: 22,
    value: 'В гостиную'
  },
  {
    id: 23,
    value: 'В детскую'
  },
  {
    id: 24,
    value: 'На кухню'
  },
]
const images = reactive([])
const search = ref('')
let page = ref(2)


onMounted(() => {
  getImages()
})

watch(search, (newVal, oldVal) => {
  if (search.value.length > 2) {
    page.value = 1
    images.splice(0)
    getImages()
  }
})

function loadMore() {
  page.value++
  getImages()
}

function getImages() {
  api.get(`/v2/images/search?page=${page.value}&query=${search.value}`).then(res => {
    images.push(...res.data.data)
  })
}

</script>
<style lang="scss" scoped>
.header {
  background: #F7F6F4;
  padding-top: 40px;

  &_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    margin-bottom: 80px;
  }
  &_img {
    box-shadow: -5px 5px 60px 15px rgba(0, 0, 0, 0.25);
    max-width: 100%;
  }
  &_title {
    margin-bottom: 25px;
    max-width: 390px;
  }
  &_desc {
    font-size: 20px;
    max-width: 346px;
    margin-bottom: 25px;
  }
  &_btns {
    display: flex;
    align-items: center;
    gap: 25px;
  }
}
.search {
  padding-top: 36px;
  padding-bottom: 32px;

  &_wrap {
    width: 990px;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #000;
    overflow: hidden;
  }
  &_input {
    display: block;
    height: 60px;
    width: 100%;
    border: none;
    font-size: 24px;
    padding-left: 16px;
  }
  &_btn {
    background: #000;
    border-radius: 10px;
    width: 62px;
    min-width: 62px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &_suggestions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 232px;
    width: 100%;
    padding: 30px 0 52px;
    gap: 10px;
  }
  &_suggestion {
    font-size: 24px;
  }
  &_results {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;

    &_item {
      aspect-ratio: 41 / 30;
      z-index: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &:after {
        content: '';
        display: block;
        background: url('@/assets/images/frame.png') no-repeat center / contain;
        box-shadow: -10px 6px 10px 0px rgba(0, 0, 0, 0.25);
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      img {
        width: 98%;
        height: 98%;
        object-fit: cover;
        z-index: -1;
      }
    }
  }
  &_more {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 30px;
    font-weight: 700;
    width: fit-content;
    margin: 30px auto 0;

    span {
      font-weight: 700;
    }

    img {
      width: 25px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .header {
    &_wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
  }
  .search {
    &_suggestions {
      height: 320px;
    }
    &_results {
      grid-template-columns: 1fr 1fr;
      gap: 50px;
    }
  }
}

@media screen and (max-width: 992px) {
  h1 {
    font-size: 40px;
  } 
  .header {
    &_wrap {
      margin-bottom: 40px;
    }
    &_desc {
      font-size: 18px;
    }
    &_btns {
      display: grid;
      text-align: center;
      max-width: 240px;
    }
  }
  .search {
    &_wrap {
      height: 40px;
      max-width: 100%;
    }
    &_btn {
      padding: 0;
      width: 40px;
      min-width: 40px;
    }
    &_suggestions {
      height: 400px;
    }
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 32px;
  }
  .header {
    &_title {
      margin-bottom: 20px;
      max-width: 320px;
    }
    &_wrap {
      gap: 30px;
      display: flex;
      flex-direction: column;
    }
    &_img {
      max-width: 80%;
      width: 350px;
    }
    &_desc {
      font-size: 16px;
    }
    &_btns {
      gap: 18px;
      max-width: 100%;
    }
    &_btn {
      font-size: 18px;
    }
  }
  .search {
    &_suggestions {
      padding: 18px 0 38px;
      height: 530px;
      flex-direction: row;
      flex-wrap: wrap;
      height: auto;
      gap: 10px 12px;
    }
    &_results {
      gap: 20px;
    }
    &_more {
      img {
        max-width: 20px;
      }
      font-size: 24px;
    }
  }
}
</style>
