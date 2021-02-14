<template>
  <v-app id="inspire">
    <v-app-bar app flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!-- left column  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <!-- center column -->
              <v-btn
                class="md-5 mr-3 elevation-21"
                dark
                fab
                button
                right
                bottom
                fixed
                @click="$vuetify.goTo(0)"
              >
                <i class="fas fa-chevron-up" />
              </v-btn>
              <MakePostButton />
              <post-loader :posts="posts" />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!-- right column -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PostLoader from "@/components/PostLoader.vue";
import MakePostButton from "@/components/MakePostButton.vue";
export default {
  name: "Home",
  components: {
    PostLoader,
    MakePostButton,
  },
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    posts: [
      {
        id: 1,
        link: "Richard Hendricks",
        description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vivamus ac sodales est.
         Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus, \n
          scelerisque sollicitudin quam lectus
           at turpis.\n  Mauris mi purus,
            luctus
          u eros non
          ò, dictum convallis velit. Fusce eget scelerisque lectus, eget
           consectetur quam.\n Duis accumsan pulvinar lectus, at porta ligula tempus 
           ornare. Praesent consectetur ex tortor. In nulla magna, laoreet vitae lacinia
            sit amet, feugiat vitae dui.\n In hac habitasse platea dictumst. Nullam 
            eu purus blandit, cursus mauris id, finibus diam. Mauris nunc diam,
             interdum nec risus sed, rutrum efficitur ex. Proin sed feugiat enim.
              Etiam luctus aliquet ex, vel vulputate ante cursus vel.\n\n\n\n\n\n\n\n\n\n\n\n`,
        votes: 1,
      },
      {
        id: 2,
        link: "Bertram Gilfoyle",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        votes: 2,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description: `😀 😃 😄 😁 😆 😅 😂 🤣 🥲 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚
         😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 
         😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮
          😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾`,
        votes: 3,
      },
      {
        id: 4,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 4,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description: "sono brutto",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description: "Descrizione",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description: "sono razzista ",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
      {
        id: 3,
        link: "Dinesh Chugtai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales est. Aenean pulvinar, dolor a accumsan porttitor, nisl ex interdum metus...",
        votes: 3,
      },
    ],
    methods: {
    },
  }),
};
</script>
