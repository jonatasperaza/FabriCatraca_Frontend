<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue';
import { useAccessRules } from '@/stores/access_rules'
import { useAccessRuleTimeZones } from '@/stores/access_rule_time_zones'
import { useAreas } from '@/stores/areas';
import { useBio } from '@/stores/bio';
import { usePortals } from '@/stores/portals';

const accessRules = useAccessRules();
const accessRuleTimeZones = useAccessRuleTimeZones();
const areas = useAreas();
const bio = useBio();
const portals = usePortals();

onMounted(async () => {
  await accessRules.getAccessRules();
  await accessRuleTimeZones.getAccessRuleTimeZones();
  await areas.getAreas();
  await bio.getBio();
  await portals.getPortals();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>You did it!</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
