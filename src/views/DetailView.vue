<template>
  <div class="detail">
    <div class="detail_nav">
      <div class="container">
        <div class="detail_nav_wrap">
          <router-link :to="{name: 'home'}" class="detail_nav_item">
            <img src="@/assets/images/back-icon.png" alt="back">
            <span>
              Все картины
            </span>
          </router-link>
          <router-link :to="{name: 'home'}" class="detail_nav_item">
            <img src="@/assets/images/close-icon.png" alt="back">
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="detail_wrap" v-if="image">
        <div class="detail_info">
          <h2 class="detail_title">
            Картина абстракция
          </h2>
          <div class="detail_frame"
            :class="{
              'white-borders': type === 1,
              'frame': type === 2 || type === 4,
              'paper-type': type === 3 || type === 6
            }"
          >
            <img :src="image.assets?.preview.url" alt="">
          </div>
          <div class="detail_info_wrap">
            <h2 class="detail_info_title">
              Картина абстракция
            </h2>
            <div class="detail_desc">
              Все картины для печати используются в HD качестве высокого разрешения, что гарантирует идеальный результат.
            </div>
            <div class="btn btn_secondary detail_total">
              Цена - {{ totalCost }} тг
            </div>
            <button class="btn detail_btn" @click="modalShow = true">
              Заказать в 1 клик
            </button>
          </div>
        </div>
        <div class="detail_calc">
          <h2 class="detail_calc_title">
            Картина абстракция
          </h2>
          <div class="detail_calc_section">
            <div class="detail_calc_header">
              <img src="@/assets/images/arrow-down.png" alt="arrow down">
              <span>Вид печати</span>
            </div>
            <div class="detail_calc_body detail_calc_types">
              <div class="detail_calc_type" 
                :class="{'active': type === 1}"
                @click="type = 1"
                >
                <img src="@/assets/images/type-1.png" alt="type">
                <span>
                  Фотобумага в багетной рамке со стеклом и паспарту
                </span>
              </div>
              <div class="detail_calc_type"
                :class="{'active': type === 2}"
                @click="type = 2">
                <img src="@/assets/images/type-2.png" alt="type">
                <span>
                  Фотобумага в багетной рамке со стеклом
                </span>
              </div>
              <div class="detail_calc_type"
                :class="{'active': type === 3}"
                @click="type = 3">
                <img src="@/assets/images/type-3.png" alt="type">
                <span>
                  Фотобумага <br> в рулоне
                </span>
              </div>
              <div class="detail_calc_type"
                :class="{'active': type === 4}"
                @click="type = 4">
                <img src="@/assets/images/type-4.png" alt="type">
                <span>
                  Холст на подрамнике в багетной рамке
                </span>
              </div>
              <div class="detail_calc_type"
                :class="{'active': type === 5}"
                @click="type = 5">
                <img src="@/assets/images/type-5.png" alt="type">
                <span>
                  Холст на <br> подрамнике
                </span>
              </div>
              <div class="detail_calc_type"
                :class="{'active': type === 6}"
                @click="type = 6">
                <img src="@/assets/images/type-6.png" alt="type">
                <span>
                  Холст в <br> рулоне
                </span>
              </div>
            </div>
          </div>
          <div class="detail_calc_section">
            <div class="detail_calc_header">
              <img src="@/assets/images/arrow-down.png" alt="arrow down">
              <span>Размер</span>
            </div>
            <img src="@/assets/images/sizes.png" alt="sizes" class="detail_sizes_img">
            <div class="detail_calc_body detail_sizes">
              <div class="detail_sizes_item">
                <label for="size-1">30x40</label>
                <input type="radio" v-model="size" id="size-1" value="1" class="detail_sizes_select">
              </div>
              <div class="detail_sizes_item">
                <label for="size-2">40x60</label>
                <input type="radio" v-model="size" id="size-2" value="2" class="detail_sizes_select">
              </div>
              <div class="detail_sizes_item">
                <label for="size-3">50x70</label>
                <input type="radio" v-model="size" id="size-3" value="3" class="detail_sizes_select">
              </div>
              <div class="detail_sizes_item">
                <label for="size-4">60x80</label>
                <input type="radio" v-model="size" id="size-4" value="4" class="detail_sizes_select">
              </div>
              <div class="detail_sizes_item">
                <label for="size-5">80x110</label>
                <input type="radio" v-model="size" id="size-5" value="5" class="detail_sizes_select">
              </div>
            </div>
            <div class="detail_sizes_bottom">
              <div class="detail_sizes_bottom_text">
                Если не нашли нужного вам <br> размера напишите нам напрямую
              </div>
              <a href="#" class="btn detail_sizes_bottom_btn">
                 WhatsApp
              </a>
            </div>
          </div>
          <div class="detail_calc_section" v-if="type === 1 || type === 2 || type === 4">
            <div class="detail_calc_header">
              <img src="@/assets/images/arrow-down.png" alt="arrow down">
              <span>Цвет багетной рамки</span>
            </div>
            <div class="detail_calc_body detail_frames">
              <div class="detail_frames_frame" 
                :class="{'selected': frame === 119410}"
                @click="frame = 119410"
              >
                <img src="@/assets/images/frames/119410.png" alt="frame">
              </div>
              <div class="detail_frames_frame"
                :class="{'selected': frame === 628057}"
                @click="frame = 628057">
                <img src="@/assets/images/frames/628057.png" alt="frame">
              </div>
              <div class="detail_frames_frame"
                :class="{'selected': frame === 119413}"
                @click="frame = 119413">
                <img src="@/assets/images/frames/119413.png" alt="frame">
              </div>
              <div class="detail_frames_frame"
                :class="{'selected': frame === 119411}"
                @click="frame = 119411">
                <img src="@/assets/images/frames/119411.png" alt="frame">
              </div>
              <div class="detail_frames_frame"
                :class="{'selected': frame === 628059}"
                @click="frame = 628059">
                <img src="@/assets/images/frames/628059.png" alt="frame">
              </div>
              <div class="detail_frames_frame"
                :class="{'selected': frame === 628061}"
                @click="frame = 628061">
                <img src="@/assets/images/frames/628061.png" alt="frame">
              </div>
              <div class="detail_frames_frame"
                :class="{'selected': frame === 127319}"
                @click="frame = 127319">
                <img src="@/assets/images/frames/127319.png" alt="frame">
              </div>
              <div class="detail_frames_frame"
                :class="{'selected': frame === 628060}"
                @click="frame = 628060">
                <img src="@/assets/images/frames/628060.png" alt="frame">
              </div>
              <div class="detail_frames_frame"
                :class="{'selected': frame === 127321}"
                @click="frame = 127321">
                <img src="@/assets/images/frames/127321.png" alt="frame">
              </div>
            </div>
          </div>
          <div class="detail_calc_section" v-if="type === 1">
            <div class="detail_calc_header">
              <img src="@/assets/images/arrow-down.png" alt="arrow down">
              <span>Цвет паспарту</span>
            </div>
            <div class="detail_calc_body detail_colors">
              <div class="detail_color"
                :class="{'selected': color === 8247}"
                @click="color = 8247">
                <img src="@/assets/images/colors/8247.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8025}"
                @click="color = 8025">
                <img src="@/assets/images/colors/8025.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 7016}"
                @click="color = 7016">
                <img src="@/assets/images/colors/7016.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 7015}"
                @click="color = 7015">
                <img src="@/assets/images/colors/7015.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8031}"
                @click="color = 8031">
                <img src="@/assets/images/colors/8031.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8050}"
                @click="color = 8050">
                <img src="@/assets/images/colors/8050.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8188}"
                @click="color = 8188">
                <img src="@/assets/images/colors/8188.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8192}"
                @click="color = 8192">
                <img src="@/assets/images/colors/8192.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8109}"
                @click="color = 8109">
                <img src="@/assets/images/colors/8109.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8055}"
                @click="color = 8055">
                <img src="@/assets/images/colors/8055.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8060}"
                @click="color = 8060">
                <img src="@/assets/images/colors/8060.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8063}"
                @click="color = 8063">
                <img src="@/assets/images/colors/8063.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8068}"
                @click="color = 8068">
                <img src="@/assets/images/colors/8068.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8098}"
                @click="color = 8098">
                <img src="@/assets/images/colors/8098.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8171}"
                @click="color = 8171">
                <img src="@/assets/images/colors/8171.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8175}"
                @click="color = 8175">
                <img src="@/assets/images/colors/8175.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8187}"
                @click="color = 8187">
                <img src="@/assets/images/colors/8187.png" alt="color">
              </div>
              <div class="detail_color"
                :class="{'selected': color === 8163}"
                @click="color = 8163">
                <img src="@/assets/images/colors/8163.png" alt="color">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-if="modalShow">
      <div class="modal_content">
        <div class="modal_header">
          <img class="modal_close" src="@/assets/images/close-icon.png" alt="close" @click="modalShow = false">
        </div>
        <div class="modal_body">
          <h2 class="modal_title">
            Заказ в 1 клик
          </h2>
          <div class="modal_desc">
            Оставьте заявку и получите бесплатный эскиз своей будущей картины перед изготовлением
          </div>
          <form @submit.prevent="handleForm" class="modal_form">
            <input 
              type="text" 
              v-model="formData.name" 
              class="modal_input" 
              :class="{'onerror': formData.nameError}"
              placeholder="Как к вам обращаться?">
            <input 
              type="number" 
              v-model="formData.phone" 
              class="modal_input" 
              :class="{'onerror': formData.phoneError}"
              placeholder="На какой номер отправить эскиз?">
            <textarea 
              v-model="formData.message" 
              class="modal_input modal_textarea" 
              placeholder="Сообщение"></textarea>
            <button class="btn modal_btn" :class="{'disabled': formData.send !== null}"
            >
              Отправить
            </button>
            <div class="modal_message danger" v-if="formData.nameError || formData.phoneError">
              Заполните обязательные поля!
            </div>
            <div class="modal_message" v-if="formData.send === true">
              Форма отправлена!
            </div>
            <div class="modal_message danger" v-if="formData.send === false">
              Форма не отправлена!
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive, watch, computed } from 'vue';
import Email from "../smtp/smtp.js"
import api from "../api"
import { useRoute } from 'vue-router'

const image = reactive({})
const route = useRoute()
const type = ref(1)
const size = ref(1)
const frame = ref(119410)
const color = ref(8247)
const modalShow = ref(false)
const loading = ref(true)
const prices = [
  {
    id: 1,
    sizes: [
      {
        id: 1,
        price: 7900
      },
      {
        id: 2,
        price: 12900
      },
      {
        id: 3,
        price: 15900
      },
      {
        id: 4,
        price: 19900
      },
      {
        id: 5,
        price: 31900
      },
    ]
  },
  {
    id: 2,
    sizes: [
      {
        id: 1,
        price: 6900
      },
      {
        id: 2,
        price: 10900
      },
      {
        id: 3,
        price: 12900
      },
      {
        id: 4,
        price: 15900
      },
      {
        id: 5,
        price: 24900
      },
    ]
  },
  {
    id: 3,
    sizes: [
      {
        id: 1,
        price: 9900
      },
      {
        id: 2,
        price: 14900
      },
      {
        id: 3,
        price: 17900
      },
      {
        id: 4,
        price: 21900
      },
      {
        id: 5,
        price: 32900
      },
    ]
  },
  {
    id: 4,
    sizes: [
      {
        id: 1,
        price: 4900
      },
      {
        id: 2,
        price: 7900
      },
      {
        id: 3,
        price: 10900
      },
      {
        id: 4,
        price: 12900
      },
      {
        id: 5,
        price: 20900
      },
    ]
  },
  {
    id: 5,
    sizes: [
      {
        id: 1,
        price: 1600
      },
      {
        id: 2,
        price: 2600
      },
      {
        id: 3,
        price: 3600
      },
      {
        id: 4,
        price: 4600
      },
      {
        id: 5,
        price: 7600
      },
    ]
  },
  {
    id: 6,
    sizes: [
      {
        id: 1,
        price: 2800
      },
      {
        id: 2,
        price: 4600
      },
      {
        id: 3,
        price: 6300
      },
      {
        id: 4,
        price: 8200
      },
      {
        id: 5,
        price: 14200
      },
    ]
  }
]
const formData = reactive({
  name: '',
  nameError: false,
  phone: '',
  phoneError: false,
  message: '',
  send: null
})

onMounted(() => {
  getImage()
})

const totalCost = computed(() => {
  const typeSizes = prices.find(x => x.id === type.value)
  const sizePrices = typeSizes.sizes.find(y => y.id === Number(size.value))
  return  sizePrices.price
})

function getImage() {
  api.get(`/v2/images/${route.params.id}`).then(res => {
    Object.assign(image, res.data) 
  })
}

function handleForm() {
  formData.nameError = formData.name.trim() === ''
  formData.phoneError = formData.phone === ''
  if (formData.nameError || formData.phoneError) {
    return
  }

  formData.send = ''
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "nurbergeneleshov@yandex.ru",
      Password : "5CFA81FB251672CEA715FCCD3AC2D9B2C449",
      To : 'nurbergeneleshov@yandex.ru',
      Port: '2525',
      From : "nurik.eleshov@gmail.com",
      Subject : "Заявка от " + formData.name,
      Body : `Имя: ${formData.name},<br> Телефон: ${formData.phone},<br> Сообщение: ${formData.message},<br>Вид: ${type.value},<br> Размер:  ${size.value},<br> Цвет рамки: ${frame.value},<br> Цвет паспорту: ${color.value}, <br> Цена: ${totalCost.value}`
  }).then(
    message => {
      formData.send = message === 'OK'
    }
  );
}

</script>

<style lang="scss" scoped>
.detail {
  padding-top: 100px;
  &_nav {
    background: #F7F6F4;
    padding: 36px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;

    &_wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &_item {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 30px;
      }

      span {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
  &_wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    padding: 65px 0;
  }
  &_frame {
    box-shadow: -10px 6px 10px 0px rgba(0, 0, 0, 0.25);
    aspect-ratio: 41 / 30;
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;

    &.frame {
      &:after {
        content: '';
        display: block;
        background: url('@/assets/images/frame.png') no-repeat center / contain;
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
      }
      img {
        width: 98%;
        height: 98%;
      }
    }

    &.paper-type {
      box-shadow: none;
      &:after {
        content: '';
        display: block;
        background: url('@/assets/images/paper-type.svg') no-repeat top left / contain;
        z-index: 2;
        position: absolute;
        width: 50%;
        height: 50%;
        top: -1px;
        left: -1px;
      }

      &:before {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 68%;
        box-shadow: -10px 6px 10px 0px rgba(0, 0, 0, 0.25);
      }
    }

    &.white-borders {
      &:after {
        content: '';
        display: block;
        background: url('@/assets/images/frame.png') no-repeat center / contain;
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
      }
      img {
        width: 65%;
        height: 65%;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
  }
  &_title {
    display: none;
  }
  &_info {
    &_title {
      display: none;
    }
  }
  &_desc {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }
  &_total {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }
  &_btn {
    margin: 0 auto;
    display: block;
    font-weight: 700;
  }
  &_calc {
    &_title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 22px;
    }
    &_section {
      margin-bottom: 60px;
    }
    &_header {
      border-radius: 10px;
      border: 1px solid #000;
      background: rgba(217, 217, 217, 0.00);
      padding: 10px 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      cursor: pointer;

      img {
        width: 15px;
      }

      span {
        font-size: 20px;
        font-weight: 700;
      }
    }
    &_types {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
    }
    &_type {
      transition: 0.5s ease;
      text-align: center;
      padding: 10px;
      border: 1px solid transparent;
      cursor: pointer;

      img {
        width: 100px;
        margin-bottom: 10px;
      }

      span {
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        display: block;
        max-width: 135px;
        margin: 0 auto;
      }

      &:hover, &.active {
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        background: #F7F6F4;
        box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }
  &_sizes {
      display: flex;
      justify-content: space-around;
      align-items: center;
    &_img {
      width: 100%;
    }
    &_item {
      label {
        display: none;
      }
    }
    &_select {
      display: block;
      margin: 10px auto 0;
    }
    &_bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;

      &_text {
        font-size: 24px;
        text-align: center;
      }

      &_btn {
        background: #4EB65F;
        border-color: #4EB65F;
      }
    }
  }
  &_frames {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 450px;
    max-width: 96%;
    margin: 0 auto;
    &_frame {
      height: 48px;
      cursor: pointer;

      &.selected {
        border: 3px solid #4EB65F;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &_colors {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin: 0 10px;
  }
  &_color {
      height: 60px;
      cursor: pointer;

      &.selected {
        border: 3px solid #4EB65F;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
  }
}

.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &_content {
    border-radius: 20px;
    background: #FFF;
    width: 500px;
    max-width: 90%;
    padding: 28px 32px 70px;
    text-align: center;
  }
  &_header {
    display: flex;
    justify-content: end;
    width: 100%;
  }
  &_close {
    width: 30px;
    cursor: pointer;
  }
  &_title {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
  }
  &_desc {
    font-size: 20px;
    margin-bottom: 20px;
  }
  &_input {
    display: block;
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;

    &.onerror {
      color: #CA0303;
      border-color: #CA0303;
    }
  }
  &_textarea {
    height: 90px;
    resize: none;
  }
  &_btn {
    padding: 4px 40px 6px;

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
  &_message {
    font-size: 20px;
    color: #0F7E0D;
    text-align: center;
    margin-top: 20px;

    &.danger {
      color: #CA0303;
    }
  }
}
@media screen and (max-width: 1200px) {
  .detail {
    &_sizes {
      &_bottom {
        &_text {
          font-size: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .detail {
    padding-top: 60px;
    &_nav {
      padding: 15px 0;
    }
    &_calc_title {
      display: none;
    }
    &_wrap {
      display: flex;
      flex-direction: column;
    }
    &_info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      align-items: center;

      &_title {
        display: block;
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 22px;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .detail {
    &_desc {
      font-size: 14px;
    }
    &_total {
      font-size: 30px;
      padding: 6px;
    }
    &_info {
      &_title {
        font-size: 30px;
        margin-bottom: 16px;
      }
    }
  }
}

@media screen and (max-width: 662px) {
  .detail {
    &_wrap {
      padding: 20px 0 28px;
    }
    &_title {
      display: block;
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 16px;
      text-align: center;
    }
    &_info {
      display: block;
      &_title {
        display: none;
      }
    }
    &_calc {
      &_section {
        margin-bottom: 30px;
      }
      &_types {
        gap: 16px;
      }
      &_type {
        padding: 10px 6px;

        img {
          width: 100%;
        }
        span {
          font-size: 12px;
        }
      }
    }
    &_sizes {
      &_bottom {
        flex-direction: column;
      }
    }
  }
}
</style>
