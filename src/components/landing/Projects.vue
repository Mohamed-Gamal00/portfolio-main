<template>
  <v-container>
    <div class="mb-15">
      <h5 class="text-h5 h5-css text-uppercase text-center">PROJECTS</h5>
    </div>
    <Carousel class="mt-16" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="project in projects" :key="project.id">
        <div class="carousel__item">
          <div class="parent">
            <div class="card">
              <div class="logo">
                <!-- <span class="circle circle1"></span> -->
                <!-- <span class="circle circle2"></span> -->
                <span class="circle circle3"></span>
                <span class="circle circle4"></span>
                <span class="circle circle5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                    width="30"
                    height="25"
                    viewBox="0 0 2000 1875"
                  >
                    <g transform="matrix(1,0,0,1,0,0)">
                      <svg
                        viewBox="0 0 384 360"
                        data-background-color="#ffffff"
                        preserveAspectRatio="xMidYMid meet"
                        height="1875"
                        width="2000"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <g id="tight-bounds" transform="matrix(1,0,0,1,0,0)">
                          <svg viewBox="0 0 384 360" height="360" width="384">
                            <g><svg></svg></g>
                            <g>
                              <svg
                                viewBox="0 0 384 360"
                                height="360"
                                width="384"
                              >
                                <g>
                                  <path
                                    d="M362.354 145.441v-42.24c0-21.12-19.163-38.402-42.587-38.402h-93.208c-15.198 0-28.337-8.831-34.559-21.646-6.222 12.81-19.36 21.646-34.559 21.646h-93.208c-23.424 0-42.587 17.282-42.587 38.402v42.24c0 15.198-8.831 28.337-21.646 34.559 12.81 6.222 21.646 19.36 21.646 34.559v42.24c0 21.12 19.163 38.402 42.587 38.402h93.208c15.198 0 28.337 8.831 34.559 21.646 6.222-12.81 19.36-21.646 34.559-21.646h93.208c23.424 0 42.587-17.282 42.587-38.402v-42.24c0-15.198 8.831-28.337 21.646-34.559-12.81-6.222-21.646-19.36-21.646-34.559z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                    stroke="none"
                                    stroke-width="1"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="10"
                                    stroke-dasharray=""
                                    stroke-dashoffset="0"
                                    font-family="none"
                                    font-weight="none"
                                    font-size="none"
                                    text-anchor="none"
                                    style="mix-blend-mode: normal"
                                    data-fill-palette-color="tertiary"
                                  ></path>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,76.80000000000001,125.85816135084428)"
                                >
                                  <svg
                                    viewBox="0 0 230.39999999999998 108.28367729831143"
                                    height="108.28367729831143"
                                    width="230.39999999999998"
                                  >
                                    <g>
                                      <svg
                                        viewBox="0 0 230.39999999999998 108.28367729831143"
                                        height="108.28367729831143"
                                        width="230.39999999999998"
                                      >
                                        <g>
                                          <svg
                                            viewBox="0 0 230.39999999999998 108.28367729831143"
                                            height="108.28367729831143"
                                            width="230.39999999999998"
                                          >
                                            <g id="textblocktransform">
                                              <svg
                                                viewBox="0 0 230.39999999999998 108.28367729831143"
                                                height="108.28367729831143"
                                                width="230.39999999999998"
                                                id="textblock"
                                              >
                                                <g>
                                                  <svg
                                                    viewBox="0 0 230.39999999999998 108.28367729831143"
                                                    height="108.28367729831143"
                                                    width="230.39999999999998"
                                                  >
                                                    <g
                                                      transform="matrix(1,0,0,1,0,0)"
                                                    >
                                                      <svg
                                                        width="230.39999999999998"
                                                        viewBox="3.86 -36.21 78.07000000000001 36.7"
                                                        height="108.28367729831143"
                                                        data-palette-color="#ffffff"
                                                      >
                                                        <path
                                                          d="M28.59 0L19.41 0 12.11-25.71 11.89-25.71Q11.99-24.71 12.1-23 12.21-21.29 12.3-19.31 12.4-17.33 12.4-15.5L12.4-15.5 12.4 0 3.86 0 3.86-35.69 16.7-35.69 24.15-10.35 24.34-10.35 31.64-35.69 44.51-35.69 44.51 0 35.64 0 35.64-15.65Q35.64-17.33 35.71-19.27 35.77-21.22 35.85-22.94 35.94-24.66 36.01-25.66L36.01-25.66 35.79-25.66 28.59 0ZM66.53-13.45L66.53-20.9 81.93-20.9 81.93-1.66Q79.17-0.71 75.61-0.11 72.04 0.49 68.14 0.49L68.14 0.49Q62.99 0.49 59.1-1.51 55.22-3.52 53.05-7.6 50.88-11.69 50.88-17.94L50.88-17.94Q50.88-23.56 53.02-27.65 55.17-31.74 59.36-33.97 63.55-36.21 69.63-36.21L69.63-36.21Q72.97-36.21 75.97-35.57 78.98-34.94 81.2-33.96L81.2-33.96 78.15-26.39Q76.22-27.34 74.14-27.82 72.07-28.3 69.68-28.3L69.68-28.3Q66.48-28.3 64.54-26.86 62.6-25.42 61.72-23.01 60.84-20.61 60.84-17.7L60.84-17.7Q60.84-14.38 61.78-12.1 62.72-9.81 64.54-8.63 66.35-7.45 68.94-7.45L68.94-7.45Q69.8-7.45 71.03-7.57 72.26-7.69 72.9-7.86L72.9-7.86 72.9-13.45 66.53-13.45Z"
                                                          opacity="1"
                                                          transform="matrix(1,0,0,1,0,0)"
                                                          fill="#ffffff"
                                                          class="wordmark-text-0"
                                                          data-fill-palette-color="quaternary"
                                                          id="text-0"
                                                        ></path>
                                                      </svg>
                                                    </g>
                                                  </svg>
                                                </g>
                                              </svg>
                                            </g>
                                          </svg>
                                        </g>
                                      </svg>
                                    </g>
                                  </svg>
                                </g>
                              </svg>
                            </g>
                            <defs></defs>
                          </svg>
                          <rect
                            width="384"
                            height="360"
                            fill="none"
                            stroke="none"
                            visibility="hidden"
                          ></rect>
                        </g>
                      </svg>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="glass"></div>
              <div class="content">
                <span class="title">{{ project.name }}</span>
                <span class="text">
                  {{ project.description }}
                </span>
              </div>
              <div class="bottom">
                <div class="social-buttons-container">
                  <button
                    @click="this.show(project.id)"
                    class="social-button .social-button1"
                  >
                    <svg
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      class="svg"
                    >
                      <path
                        d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                      ></path>
                    </svg>
                  </button>
                  <!-- link -->
                  <a v-if="project.url" target="_blank" :href="project.url">
                    <button class="social-button .social-button2">
                      <svg
                        width="15px"
                        height="15px"
                        viewBox="0 0 24 24"
                        class="svg"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM9.198 7.25H9.30203C10.2005 7.24997 10.9497 7.24995 11.5445 7.32991C12.1723 7.41432 12.7391 7.59999 13.1945 8.05546C13.65 8.51093 13.8357 9.07773 13.9201 9.70552C14.0001 10.3003 14 11.0495 14 11.948L14 12C14 12.4142 13.6642 12.75 13.25 12.75C12.8358 12.75 12.5 12.4142 12.5 12C12.5 11.036 12.4984 10.3884 12.4335 9.9054C12.3714 9.44393 12.2642 9.24644 12.1339 9.11612C12.0036 8.9858 11.8061 8.87858 11.3446 8.81654C10.8616 8.7516 10.214 8.75 9.25 8.75C8.28599 8.75 7.63843 8.7516 7.15539 8.81654C6.69393 8.87858 6.49644 8.9858 6.36612 9.11612C6.2358 9.24644 6.12858 9.44393 6.06654 9.9054C6.0016 10.3884 6 11.036 6 12C6 12.964 6.0016 13.6116 6.06654 14.0946C6.12858 14.5561 6.2358 14.7536 6.36612 14.8839C6.49644 15.0142 6.69393 15.1214 7.15539 15.1835C7.63843 15.2484 8.28599 15.25 9.25 15.25C9.66422 15.25 10 15.5858 10 16C10 16.4142 9.66422 16.75 9.25 16.75L9.19798 16.75C8.29951 16.75 7.5503 16.7501 6.95552 16.6701C6.32773 16.5857 5.76093 16.4 5.30546 15.9445C4.84999 15.4891 4.66432 14.9223 4.57991 14.2945C4.49995 13.6997 4.49997 12.9505 4.5 12.052V11.948C4.49997 11.0495 4.49995 10.3003 4.57991 9.70552C4.66432 9.07773 4.84999 8.51093 5.30546 8.05546C5.76093 7.59999 6.32773 7.41432 6.95552 7.32991C7.55029 7.24995 8.29954 7.24997 9.198 7.25ZM16.8446 8.81654C16.3616 8.7516 15.714 8.75 14.75 8.75C14.3358 8.75 14 8.41422 14 8C14 7.58579 14.3358 7.25 14.75 7.25L14.802 7.25C15.7005 7.24997 16.4497 7.24995 17.0445 7.32991C17.6723 7.41432 18.2391 7.59999 18.6945 8.05546C19.15 8.51093 19.3357 9.07773 19.4201 9.70552C19.5001 10.3003 19.5 11.0495 19.5 11.9479V12.052C19.5 12.9505 19.5001 13.6997 19.4201 14.2945C19.3357 14.9223 19.15 15.4891 18.6945 15.9445C18.2391 16.4 17.6723 16.5857 17.0445 16.6701C16.4497 16.7501 15.7005 16.75 14.802 16.75H14.698C13.7995 16.75 13.0503 16.7501 12.4555 16.6701C11.8277 16.5857 11.2609 16.4 10.8055 15.9445C10.35 15.4891 10.1643 14.9223 10.0799 14.2945C9.99995 13.6997 9.99997 12.9505 10 12.052L10 12C10 11.5858 10.3358 11.25 10.75 11.25C11.1642 11.25 11.5 11.5858 11.5 12C11.5 12.964 11.5016 13.6116 11.5665 14.0946C11.6286 14.5561 11.7358 14.7536 11.8661 14.8839C11.9964 15.0142 12.1939 15.1214 12.6554 15.1835C13.1384 15.2484 13.786 15.25 14.75 15.25C15.714 15.25 16.3616 15.2484 16.8446 15.1835C17.3061 15.1214 17.5036 15.0142 17.6339 14.8839C17.7642 14.7536 17.8714 14.5561 17.9335 14.0946C17.9984 13.6116 18 12.964 18 12C18 11.036 17.9984 10.3884 17.9335 9.9054C17.8714 9.44393 17.7642 9.24644 17.6339 9.11612C17.5036 8.9858 17.3061 8.87858 16.8446 8.81654Z"
                        />
                      </svg>
                    </button>
                  </a>
                  <button
                    v-if="!project.url"
                    style="cursor: not-allowed"
                    class="social-button"
                  >
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_429_11057)">
                        <path
                          d="M5.63604 5.63598C4.00736 7.26466 3 9.51466 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C14.4853 20.9999 16.7353 19.9926 18.364 18.3639M5.63604 5.63598C7.26472 4.0073 9.51472 2.99994 12 2.99994C16.9706 2.99994 21 7.02938 21 11.9999C21 14.4852 19.9926 16.7352 18.364 18.3639M5.63604 5.63598L18.364 18.3639"
                          stroke="#292929"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_429_11057">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <!-- youtube -->
                  <a target="_blank" :href="project.youtube">
                    <button class="social-button .social-button3">
                      <svg
                        width="17px"
                        height="17px"
                        class="svg"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"
                        ></path>
                        <path
                          d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"
                        ></path>
                        <path
                          d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"
                        ></path>
                        <path
                          d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <v-container>
      <div>
        <!-- <img src="../../assets/images/banner-bg.jpg" v-viewer alt="image"> -->
        <!-- <button type="button">Click to show</button> -->
      </div>
    </v-container>
  </v-container>
</template>

<!-- <script setup>
import logo from "../../assets/images/banner-bg.jpg"
</script> -->
<script>
import almona_1 from "../../assets/images/almona.png";
import almona_2 from "../../assets/images/almona_2.jpg";
import almona_3 from "../../assets/images/almona_3.png";
import almona_4 from "../../assets/images/almona_4.jpg";
import almona_5 from "../../assets/images/almona_5.jpg";
import almona_6 from "../../assets/images/almona_6.jpg";
import almona_7 from "../../assets/images/almona_7.jpg";
import almona_8 from "../../assets/images/almona_8.jpg";
import almona_9 from "../../assets/images/almona_9.png";
import almona_10 from "../../assets/images/almona_10.png";
import shar_1 from "../../assets/images/shar_1.jpg";
import shar_2 from "../../assets/images/shar_2.jpg";
import shar_3 from "../../assets/images/shar_3.jpg";
import shar_4 from "../../assets/images/shar_4.jpg";
import shar_5 from "../../assets/images/shar_5.jpg";
import shar_6 from "../../assets/images/shar_6.jpg";
import shar_7 from "../../assets/images/shar_7.jpg";
import shar_8 from "../../assets/images/shar_8.jpg";
import sigma_1 from "../../assets/images/sigma_1.png";
import sigma_2 from "../../assets/images/sigma_2.jpg";
import sigma_3 from "../../assets/images/sigma_3.jpg";
import sigma_4 from "../../assets/images/sigma_4.jpg";
import sigma_5 from "../../assets/images/sigma_5.jpg";
import sigma_6 from "../../assets/images/sigma_6.jpg";
import sigma_7 from "../../assets/images/sigma_7.png";
import rayyeh_2 from "../../assets/images/rayyeh_2.jpg";
import rayyeh_3 from "../../assets/images/rayyeh_3.jpg";
import rayyeh_4 from "../../assets/images/rayyeh_4.jpg";
import rayyeh_5 from "../../assets/images/rayyeh_5.jpg";
import lap_1 from "../../assets/images/lap_1.png";
import lap_2 from "../../assets/images/lap_2.png";
import lap_3 from "../../assets/images/lap_3.png";
import lap_4 from "../../assets/images/lap_4.jpg";
import lap_5 from "../../assets/images/lap_5.jpg";
import lap_6 from "../../assets/images/lap_6.jpg";
import lap_7 from "../../assets/images/lap_7.jpg";
import lap_8 from "../../assets/images/lap_8.jpg";
import lap_9 from "../../assets/images/lap_9.jpg";
import lap_10 from "../../assets/images/lap_10.jpg";
import lap_11 from "../../assets/images/lap_11.jpg";
import lap_12 from "../../assets/images/lap_12.png";

import e_co_1 from "../../assets/images/e_co_1.jpg";
import e_co_2 from "../../assets/images/e_co_2.jpg";
import e_co_3 from "../../assets/images/e_co_3.png";
// import img6 from "../../assets/images/skills.png";
// import img7 from "../../assets/images/skills.png";
// import img8 from "../../assets/images/skills.png";
import empty from "../../assets/images/empty.png";

import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      empty: [empty],
      projects: [
        {
          id: 1,
          name: "Almona Website",
          description:
            "Al-Mona Trading and Marketing Est. was established in 2022 AD. It provides electronic design services and various types of digital solutions and electronic marketing.",
          images: [
            almona_1,
            almona_2,
            almona_3,
            almona_4,
            almona_5,
            almona_6,
            almona_7,
            almona_8,
            almona_9,
            almona_10,
          ],
          youtube: "https://www.youtube.com/@MohamedGamal-gq4od/videos",
          url: "https://www.almonaoffice.sa/",
        },
        {
          id: 2,
          name: "El-sharayieh",
          description:
            "It is a website through which electronic SIM cards are sold and reserved, where there is a monthly, annual or semi-annual reservation",
          images: [
            shar_1,
            shar_2,
            shar_3,
            shar_4,
            shar_5,
            shar_6,
            shar_7,
            shar_8,
          ],
          youtube: "https://www.youtube.com/watch?v=tk1ayMZEHoU",
          url: "https://sim.almona.host/",
        },
        {
          id: 3,
          name: "Dental-lap",
          description:
            "The Dental Clinic Reservation website simplifies the appointment booking process for a dental clinic",
          images: [
            lap_1,
            lap_2,
            lap_3,
            lap_4,
            lap_5,
            lap_6,
            lap_7,
            lap_8,
            lap_9,
            lap_10,
            lap_11,
            lap_12,
          ],
          youtube: "https://youtu.be/zjiVQOiGLNg?si=yvThHGssoYad-T9K",
        },
        {
          id: 4,
          name: "MyDummyStore",
          description:
            "MyDummyStore serves as a comprehensive example of a fully functional e-commerce application.",
          images: [e_co_1, e_co_2, e_co_3],
          youtube: "https://youtu.be/6KwQTmcmjvM?si=8L6npdr8W7rxx9Me",
        },

        {
          id: 5,
          name: "Sigma Website",
          description:
            "Sigma Website Trading and Marketing Est. It provides electronic design services and various types of digital solutions and electronic marketing.",
          images: [
            sigma_1,
            sigma_2,
            sigma_3,
            sigma_4,
            sigma_5,
            sigma_6,
            sigma_7,
          ],
          youtube: "https://www.youtube.com/@MohamedGamal-gq4od/videos",
          url: "https://sigma-business.com/",
        },
        {
          id: 6,
          name: "Rayyeh",
          description:
            "ٌ Rayyeh is an order delivery application that aims to provide an order delivery service to customers in Mecca with ease and convenience. The application ",
          images: [rayyeh_2, rayyeh_3, rayyeh_4, rayyeh_5],

          youtube: "https://youtu.be/zPMbx_xBI8o?si=_aQ85Mm9zwTSQk4a",
          url: "https://rayyah.net/",
        },
      ],
      // carousel settings
      settings: {
        itemsToShow: 1.2,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    show(project_id) {
      const images = this.projects[project_id - 1].images;
      if (images) {
        this.$viewerApi({
          images: images,
        });
      } else {
        this.$viewerApi({
          images: this.empty,
        });
      }
    },
    // show() {
    //   this.projects.forEach((project) => {
    //     this.$viewerApi({
    //       images: project.images.map((image) => image),
    //     });
    //   });
    // },
    // show() {
    //   this.$viewerApi({
    //     images: this.projects,
    //   });
    // },
  },
});
</script>

<style>
.carousel__item {
  min-height: 320px;
  width: 100%;
  /* background-color: var(--vc-clr-primary); */
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  /* padding: 10px; */
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box !important;
  /* border: 5px solid rgb(0, 238, 255) !important; */
  color: rgb(0, 0, 0);
}
</style>
<style scoped>
@media (min-width: 992px) {
  .parent {
    width: 275px;
    height: 300px;
    perspective: 1000px;
  }

  .parent .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, hsl(0, 0%, 89%) 0%, #929aab 100%);
    /* background: linear-gradient(
    135deg,
    rgb(0, 255, 214) 0%,
    rgb(8, 226, 96) 100%
  ); */
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px,
      rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }

  .parent .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.349) 0%,
      rgba(255, 255, 255, 0.815) 100%
    );
    /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .parent .content {
    /* padding: 100px 60px 0px 30px; */
    padding: 67px 20px 0px 20px;
    transform: translate3d(0, 0, 26px);
  }

  .parent .content .title {
    display: block;
    /* color: #00894d; */
    color: #393e46;
    font-weight: 900;
    font-size: 20px;
  }

  .parent .content .text {
    display: block;
    /* color: rgba(0, 137, 78, 0.7647058824); */
    color: #393e46;
    font-size: 12px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
    width: 30px;
    aspect-ratio: 1;
    padding: 5px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    /* box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px; */
    box-shadow: rgba(63, 63, 63, 0.5) 0px 7px 5px -5px;
  }

  .bottom .social-buttons-container .social-button:first-child {
    transition: transform 0.2s ease-in-out 0.4s,
      box-shadow 0.2s ease-in-out 0.4s;
  }

  .bottom .social-buttons-container .social-button:nth-child(2) {
    transition: transform 0.2s ease-in-out 0.6s,
      box-shadow 0.2s ease-in-out 0.6s;
  }

  .bottom .social-buttons-container .social-button:nth-child(3) {
    transition: transform 0.2s ease-in-out 0.8s,
      box-shadow 0.2s ease-in-out 0.8s;
  }

  .bottom .social-buttons-container .social-button .svg {
    width: 15px;
    /* fill: #00894d; */
    fill: #191a19;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: black;
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
  }

  .bottom .social-buttons-container .social-button:active .svg {
    fill: black;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    /* -webkit-backdrop-filter: blur(5px); */
    /* backdrop-filter: blur(5px); */
    background: rgba(206, 206, 206, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
      rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    /* transform: translate3d(0, 0, 50px); */
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }
}

.parent {
  width: 275px;
  height: 300px;
  perspective: 1000px;
}

.parent .card {
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(135deg, hsl(0, 0%, 89%) 0%, #929aab 100%);
  /* background: linear-gradient(
    135deg,
    rgb(0, 255, 214) 0%,
    rgb(8, 226, 96) 100%
  ); */
  transition: all 0.5s ease-in-out;
  /* transform-style: preserve-3d; */
  box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px,
    rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
}

.parent .glass {
  transform-style: preserve-3d;
  position: absolute;
  inset: 8px;
  border-radius: 55px;
  border-top-right-radius: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.349) 0%,
    rgba(255, 255, 255, 0.815) 100%
  );
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
  transform: translate3d(0px, 0px, 25px);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transition: all 0.5s ease-in-out;
}

.parent .content {
  /* padding: 100px 60px 0px 30px; */
  padding: 67px 20px 0px 20px;
  transform: translate3d(0, 0, 26px);
}

.parent .content .title {
  display: block;
  /* color: #00894d; */
  color: #393e46;
  font-weight: 900;
  font-size: 20px;
}

.parent .content .text {
  display: block;
  /* color: rgba(0, 137, 78, 0.7647058824); */
  color: #000000;
  font-size: 12px;
  margin-top: 20px;
}

.bottom {
  padding: 10px 12px;
  transform-style: preserve-3d;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translate3d(0, 0, 26px);
}

.bottom .social-buttons-container {
  display: flex;
  gap: 10px;
  transform-style: preserve-3d;
}

.bottom .social-buttons-container .social-button {
  width: 30px;
  aspect-ratio: 1;
  padding: 5px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  border: none;
  display: grid;
  place-content: center;
  /* box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px; */
  box-shadow: rgba(63, 63, 63, 0.5) 0px 7px 5px -5px;
}

.bottom .social-buttons-container .social-button:first-child {
  transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
}

.bottom .social-buttons-container .social-button:nth-child(2) {
  transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
}

.bottom .social-buttons-container .social-button:nth-child(3) {
  transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
}

.bottom .social-buttons-container .social-button .svg {
  width: 15px;
  /* fill: #00894d; */
  fill: #191a19;
}

.bottom .social-buttons-container .social-button:hover {
  background: black;
}

.bottom .social-buttons-container .social-button:hover .svg {
  fill: white;
}

.bottom .social-buttons-container .social-button:active {
  background: rgb(255, 234, 0);
}

.bottom .social-buttons-container .social-button:active .svg {
  fill: black;
}

.logo {
  position: absolute;
  right: 0;
  top: 0;
  transform-style: preserve-3d;
}

.logo .circle {
  display: block;
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
  top: 0;
  right: 0;
  box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
  /* -webkit-backdrop-filter: blur(5px); */
  /* backdrop-filter: blur(5px); */
  background: rgba(206, 206, 206, 0.2);
  transition: all 0.5s ease-in-out;
}

.logo .circle1 {
  width: 170px;
  transform: translate3d(0, 0, 20px);
  top: 8px;
  right: 8px;
}

.logo .circle2 {
  width: 140px;
  transform: translate3d(0, 0, 40px);
  top: 10px;
  right: 10px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  transition-delay: 0.4s;
}

.logo .circle3 {
  width: 110px;
  transform: translate3d(0, 0, 60px);
  top: 17px;
  right: 17px;
  transition-delay: 0.8s;
}

.logo .circle4 {
  width: 80px;
  transform: translate3d(0, 0, 80px);
  top: 23px;
  right: 23px;
  transition-delay: 1.2s;
}

.logo .circle5 {
  width: 50px;
  transform: translate3d(0, 0, 100px);
  top: 30px;
  right: 30px;
  display: grid;
  place-content: center;
  transition-delay: 1.6s;
}

.logo .circle5 .svg {
  width: 20px;
  fill: white;
}
</style>
