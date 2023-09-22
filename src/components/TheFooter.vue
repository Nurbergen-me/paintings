<template>
  <footer class="footer">
    <div class="container">
        <div class="footer_wrap">
            <div class="footer_left">
                <div class="footer_left_info">
                    <div class="footer_logo">
                        Fotoholst.kz
                    </div>
                    <div class="footer_text">
                        Мы всегда на связи.
                        Вы можете подписаться и всегда следить за нашими новостями
                    </div>
                </div>
                <div class="footer_socials">
                    <a href="#" class="footer_socials_item">
                        <IconInstagram />
                    </a>
                    <a href="#" class="footer_socials_item">
                        <IconFb />
                    </a>
                    <a href="#" class="footer_socials_item">
                        <IconTiktok />
                    </a>
                    <a href="#" class="footer_socials_item">
                        <IconVK />
                    </a>
                    <a href="#" class="footer_socials_item">
                        <IconGoogle />
                    </a>
                    <a href="#" class="footer_socials_item">
                        <IconYandex />
                    </a>
                </div>
            </div>
            <div class="footer_right">
                <a href="tel:+77787116551" class="footer_right_item">
                    <IconPhone />
                    +7 778 711 65 51
                </a>
                <a href="mailto:fotoholstastana@mail.ru" class="footer_right_item">
                    <IconMail />
                    fotoholstastana@mail.ru
                </a>
                <div class="footer_right_item">
                    <IconHome />
                    г. Астана, ул. Желтоксан 20
                </div>
            </div>
        </div>
    </div>
    <div class="footer_bottom">
        <a href="https://astana-it.kz/" target="_blank" class="footer_bottom_link">
            Создание сайтов Astana IT
        </a>
    </div>
  </footer>
</template>

<script setup>
import IconPhone from './icons/IconPhone.vue'
import IconMail from './icons/IconMail.vue'
import IconHome from './icons/IconHome.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconFb from './icons/IconFb.vue'
import IconTiktok from './icons/IconTiktok.vue'
import IconVK from './icons/IconVK.vue'
import IconGoogle from './icons/IconGoogle.vue'
import IconYandex from './icons/IconYandex.vue'

</script>

<style lang="scss" scoped>
.footer {
    background: #F7F6F4;
    padding-top: 50px;

    &_wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 40px;
    }
    &_left {
        display: flex;
        align-items: center;
        gap: 15px;

        &_info {
            text-align: center;
        }
    }
    &_logo {
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        margin-bottom: 8px;
    }
    &_text {
        max-width: 208px;
    }
    &_socials {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        flex-wrap: wrap;
        gap: 15px;
    }
    &_right {
        display: flex;
        align-items: center;
        gap: 50px;

        &_item {
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }
    &_bottom {
        background: rgba(255,255,255,0.5);
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        &_link {
            color: #000;
            font-size: 12px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .footer {
        &_wrap {
            flex-direction: column;
            gap: 25px;
        }
        &_left {
            &_info {
                display: flex;
                gap: 20px;
                align-items: center;
            }
        }
        &_socials {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        }
    }
}
@media screen and (max-width: 768px) {
    .footer {
        padding: 20px;
        &_wrap {
            flex-direction: row;
            justify-content: space-around;
            gap: 25px;
        }
        &_left {
            flex-direction: column;
            &_info {
                flex-direction: column;
            }
        }
        &_right {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
        }
        &_socials {
            gap: 6px;
            &_item {
                height: 20px;

                svg {
                    height: 100%;
                }
            }
        }
    }
}
@media screen and (max-width: 576px) {
    .footer {
        &_wrap {
            flex-direction: column;
            gap: 30px;
        }
    }
}
</style>