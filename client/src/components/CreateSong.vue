<template>
    <v-layout>
        <v-flex xs4>
            <panel title="Song MetaData">
            <v-text-field
                label="Title"
                required
                :rules="[required]"
                v-model="song.title"
            ></v-text-field>

            <v-text-field
                label="Artist"
                required
                :rules="[required]"
                v-model="song.artist"
            ></v-text-field>

            <v-text-field
                label="Genre"
                required
                :rules="[required]"
                v-model="song.genre"
            ></v-text-field>

            <v-text-field
                label="Album"
                required
                :rules="[required]"
                v-model="song.album"
            ></v-text-field>

            <v-text-field
                label="Album Image Url"
                required
                :rules="[required]"
                v-model="song.albumImageUrl"
            ></v-text-field>

            <v-text-field
                label="Youtube Id"
                required
                :rules="[required]"
                v-model="song.youtubeId"
            ></v-text-field>
            </panel>
        </v-flex>

        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
                <v-textarea
                    label="Tab"
                    required
                    :rules="[required]"
                    v-model="song.tab"
                ></v-textarea>

                <v-textarea
                    label="Lyric"
                    required
                    :rules="[required]"
                    v-model="song.lyric"
                ></v-textarea>
            </panel>

        <div class="danger-alert" v-if="error">
            {{error}}
        </div>
         <v-btn
            class="cyan" dark
            @click="create">
            Create Song
          </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongsService'

export default {
    data () {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyric: null,
                tab: null
            }, 
            error: null,
            required: (value) => !!value || 'Required.'
        }
    },
    methods: {
        async create () {
            const areAllFieldsFilledIn = Object
                .keys(this.song)
                .every(key => !!this.song[key])

            if (!areAllFieldsFilledIn) {
                this.error = 'Please fill in all the required fields.'
                return
            }
            try {
                await SongService.post(this.song)
                this.$router.push({
                    name: 'songs'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
</style>