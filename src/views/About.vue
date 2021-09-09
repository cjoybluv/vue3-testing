<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <div v-for="nation in nations" :key="nation['ID NATION']">
        {{ nation.Nation }} - {{ nation.Population }} - {{ nation.Year }}
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { mapActions, useStore } from "vuex";
import { INation } from "@/types/datausa";

export default defineComponent({
  setup() {
    const store = useStore();
    const nations: ComputedRef<INation[]> = computed(
      () => store.getters["nations"]
    );

    return { nations };
  },
  mounted() {
    this.fetchNations();
  },
  methods: {
    ...mapActions({
      fetchNations: "fetchNations",
    }),
  },
});
</script>
