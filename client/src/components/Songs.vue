<template>
<v-container fluid column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
            <v-btn
                slot="action"
                @click="navigateTo({name: 'songs-create'})"
                class="cyan accent-2"
                light
                medium
                absolute
                right
                middle
                fab>
                <v-icon>add</v-icon>
            </v-btn>
        <div v-for="song in songs"
             class="song"
             :key="song.id">

            <v-layout>
                <v-flex xs6>
                    <div class="song-title">
                         {{song.title}} 
                    </div>
                    <div class="song-artist">
                         {{song.artist}} 
                    </div>
                    <div class="song-genre">
                         {{song.genre}} 
                    </div>

                    <v-btn
                        class="cyan" dark
                        @click="navigateTo({
                            name: 'song', 
                            params: {
                                songId: song.id
                                }
                            })">
                            View
                    </v-btn>
                </v-flex>

                <v-flex xs6>
                    <img class="album-image" :src="song.albumImageUrl" />
                </v-flex>
            </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
    components: {
        Panel
    },
    data () {
        return {
            songs: null
        }
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    },
    async mounted () {
        this.songs = (await SongsService.index()).data
        console.log('songs', this.songs)
    }
}
</script>

<style scoped>
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
}
.song-title {
    font-size: 30px;
}
.song-artist {
    font-size: 24px;
}
.song_genre {
    font-size: 18px;
}
.album-image {
    width : 70%;
    margin: 0 auto;
}
</style>