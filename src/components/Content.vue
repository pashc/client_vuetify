<template>

  <v-container class="container-fluid font">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5 img-width">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>

        <v-content style="padding: 10px 32px;">

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis leo vel nibh scelerisque
            accumsan.
            Mauris in convallis tortor, vehicula hendrerit mi. Cras pretium malesuada bibendum. Nam vel dui aliquam,
            dignissim lectus ut, vulputate sem. Phasellus vitae condimentum diam. Aenean vestibulum, nulla ac volutpat
            facilisis, justo lorem commodo ex, id elementum ante magna quis metus. Donec sapien nisi, tincidunt nec
            vehicula lobortis, luctus quis dolor. Vestibulum tincidunt pellentesque urna, dictum egestas sem. Ut
            pulvinar
            pulvinar diam, quis efficitur tellus ullamcorper non. Quisque felis ex, suscipit quis diam sit amet,
            cursus
            feugiat ante. Curabitur sagittis tempor ligula non vulputate. Donec placerat tempus egestas. Curabitur
            quis
            diam ut odio hendrerit pharetra. Suspendisse sed aliquam dolor. Praesent gravida erat quam, quis rutrum ex
            tempor a. Etiam eu sollicitudin neque.
          </p>
          <p>
            Aliquam et porttitor nibh. Donec aliquet condimentum lacus in tincidunt. Suspendisse fringilla vulputate
            ligula, a efficitur nisi imperdiet vel. Praesent bibendum pulvinar felis vitae sagittis. Interdum et
            malesuada
            fames ac ante ipsum primis in faucibus. Pellentesque non placerat diam. Vestibulum tempus rhoncus tellus
            id
            euismod. Phasellus quis egestas tellus. Etiam scelerisque, diam vitae placerat tristique, sapien leo
            suscipit
            ante, sed lobortis erat odio efficitur nulla. Mauris ultrices lorem velit, vitae laoreet arcu dapibus
            quis.
            Fusce et enim a purus consectetur finibus vel ut dolor. Praesent pulvinar tempor nulla, eget mollis dui
            placerat id.
          </p>
          <p>
            Sed eu placerat felis. Cras eu semper sem. Fusce mi leo, condimentum id laoreet sit amet, maximus quis
            nisi.
            Mauris pellentesque nisi vel urna scelerisque, et fringilla magna elementum. Pellentesque a egestas magna.
            Vivamus a blandit libero. Suspendisse id nibh tristique, varius lacus eget, convallis est. Maecenas
            interdum
            arcu sed mauris elementum iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Duis arcu tortor, accumsan sed efficitur a, fermentum id leo. Vivamus in metus nec mi
            rhoncus lobortis. Etiam porttitor suscipit tellus. Nam at hendrerit tortor, ut semper ante. Fusce non ex
            nec
            mi ultricies posuere. Nullam vitae rhoncus lorem.
          </p>
          <p>
            Nulla risus leo, luctus eget consequat non, gravida sagittis enim. Ut dui ex, gravida vitae mattis ac,
            condimentum ut velit. Nullam nec pharetra libero. Duis tristique neque vitae efficitur semper. Aenean
            sagittis
            quam ut scelerisque facilisis. Quisque ex justo, dignissim at ipsum vitae, ultricies dignissim orci.
            Aliquam
            at gravida arcu. Pellentesque nec tortor bibendum, dignissim eros at, ultricies est. Cras eget augue vel
            ante
            finibus tempus vitae vitae lectus. Suspendisse non ullamcorper tellus. Cras at ultricies enim, ac iaculis
            est.
          </p>
          <p>
            Curabitur dictum iaculis semper. Aliquam dapibus mattis risus id molestie. Nam vel feugiat risus, ac
            ultrices
            ipsum. In at euismod ipsum. Aenean turpis tortor, cursus et luctus gravida, dapibus eu ligula. Sed rhoncus
            eget nulla et rutrum. Nulla luctus, tortor ut ornare mollis, quam justo dapibus dolor, vel posuere libero
            mi
            eu augue. Nunc sagittis ligula non erat ultrices lobortis.
          </p>

        </v-content>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<style scoped>

  .container-fluid {
    background-color: #2d2d2d;
    -webkit-box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    margin-top: 0px;
    margin-bottom: 20px;
    max-width: 1400px;
    padding: 20px;
  }

  .font {
    color: #d8d6cf;
    font-weight: normal;
    font-size: 18px;
    font-family: Courier, sans-serif;
  }

  .img-width {
    max-width: 100%;
    max-height: 100%;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
    font-weight: 100;
  }

  h3 {
    padding-top: 8px;
    font-size: 18px;
  }

  h2, h3 {
    margin-top: 5px;
  }

</style>
