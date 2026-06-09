import { ROLES } from './roles'

export const HOME_BY_ROLE = Object.freeze({
  [ROLES.GENERAL]: '/general/home',
  [ROLES.LIDER]: '/lider/home',
  [ROLES.GESTOR]: '/gestor/home',
  [ROLES.ADMIN]: '/admin/home'
})