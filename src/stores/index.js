import { createPinia } from 'pinia'
import { useUser } from './user'
import { useAuth } from './auth'
import { useAccessRules } from './access_rules'
import { useAccessRuleTimeZones } from './access_rule_time_zones'
import { useAreas } from './areas'
import { useBio } from './bio'
import { useCards } from './cards'
import { useDevice } from './device'
import { useGroups } from './groups'
import { useGroupAccessRules } from './group_access_rules'
import { usePortals } from './portals'
import { usePortalAccessRules } from './portal_access_rules'
import { useTimeSpans } from './time_spans'
import { useTimeZones } from './time_zones'
import { useUserAccessRules } from './user_access_rules'
import { useUserGroups } from './user_groups'

export {
  useUser,
  useAuth,
  useAccessRules,
  useAccessRuleTimeZones,
  useAreas,
  useBio,
  useCards,
  useDevice,
  useGroups,
  useGroupAccessRules,
  usePortals,
  usePortalAccessRules,
  useTimeSpans,
  useTimeZones,
  useUserAccessRules,
  useUserGroups,
}

//pinia
const pinia = createPinia()

export default pinia
