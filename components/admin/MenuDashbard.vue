<template>
  <aside>
    <ul class="flex flex-col gap-4 text-sm font-bold text-white bg-[black] py-[1.5rem] rounded-2xl">
      <li class="" v-for="(item, index) in menuList" :key="index">
        <div class="flex gap-2 cursor-pointer rounded-lg h-12 dashboard-item pl-[1.375rem]"
          :class="{ 'selected-dashboard-item': item.selected && !item.hasSubmenu }">
          <button class="flex items-center justify-between w-full pr-[1rem]" v-if="item.hasSubmenu"
            @click="toggleMenu(item)">
            <div class="flex items-center gap-[0.625rem]">
              <component :is="item.icon"></component>
              <span class="font-bold text-sm leading-[1.625rem]">{{ item.title }}</span>
            </div>
            <IconsArrowDownSmall class="sub-menu-arrow" :class="{ 'sub-menu-arrow-open': item.isSubmenuOpen }">
            </IconsArrowDownSmall>
          </button>
          <nuxt-link :to="item.path" class="flex items-center justify-center"
            :class="{ 'selected-dashboard-item': item.selected }" v-else>
            <div class="flex items-center gap-[0.625rem] pr-[1rem]">
              <component :is="item.icon"></component>
              <span class="font-bold text-sm leading-[1.625rem]">{{ item.title }}</span>
            </div>
          </nuxt-link>
        </div>
        <AdminCollapse :is-open="item.isSubmenuOpen">
          <ul>
            <li v-for="submenuItem in item.submenu" :key="submenuItem.title">
              <NuxtLink :to="submenuItem.to" :class="{ 'selected-dashboard-item': route.path === submenuItem.to }"
                class="dashboard-item font-normal cursor-pointer gap-14 h-12 items-center flex">
                <!-- <component :is="submenuItem.icon"></component> -->
                {{ submenuItem.title }}
              </NuxtLink>
            </li>
          </ul>
        </AdminCollapse>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import IconsAdminDashboard from "~/components/icons/admin/Dashboard.vue";
import IconsAdminOrgArchitecture from "~/components/icons/admin/OrgArchitecture.vue";
import IconsAdminArrowDown from "~/components/icons/ArrowDown.vue";
import IconsAdminDocuments from "~/components/icons/admin/Documents.vue"
import IconsAdminProcess from "~/components/icons/admin/Process.vue"
import IconsAdminArchitecture from "~/components/icons/admin/Architecture.vue"
import IconsAdminUsers from "~/components/icons/admin/Users.vue"
import IconsPermission from "~/components/icons/admin/Permission.vue"
import IconsAdminRole from "~/components/icons/admin/Role.vue"

interface SubMenuItem {
  title: string,
  to: string,
  icon: any
}
interface MenuItem {
  id: number,
  title: string,
  path: string,
  selected: boolean,
  hasSubmenu: boolean,
  isSubmenuOpen: boolean,
  icon: any,
  submenu: SubMenuItem[],
}
const menuList = ref<MenuItem[]>([
  {
    id: 1,
    title: "داشبورد",
    path: '/admin/dashboard',
    selected: false,
    hasSubmenu: false,
    isSubmenuOpen: false,
    icon: IconsAdminDashboard,
    submenu: [],

  },
  {
    id: 2,
    title: "معماری سازمانی",
    path: 'architectures',
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    icon: IconsAdminArchitecture,
    submenu: [
      {
        title: "ایجاد معماری",
        to: "/admin/architectures/create",
        icon: ""
      },
      {
        title: "لیست معماری ها",
        to: "/admin/architectures",
        icon: ""
      },
      
    ],
  },
  {
    id: 3,
    title: "فرایندها",
    path: 'processes',
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    icon: IconsAdminProcess,
    submenu: [
      {
        title: "ایجاد فرایند",
        to: "/admin/processes/create",
        icon: ""
      },
      {
        title: "لیست فرایند ها",
        to: "/admin/processes",
        icon: ""
      },
      
    ],
  },
  {
    id: 3,
    title: "زیرفرایندها",
    path: 'sub-processes',
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    icon: IconsAdminProcess,
    submenu: [
      {
        title: "ایجاد زیرفرایند",
        to: "/admin/sub-processes/create",
        icon: ""
      },
      {
        title: "لیست زیرفرایند ها",
        to: "/admin/sub-processes",
        icon: ""
      },
      
    ],
  },
  {
    id: 3,
    title: "روشهای اجرایی و ...",
    path: 'procedures',
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    icon: IconsAdminDocuments,
    submenu: [
      {
        title: "ایجاد روش اجرایی",
        to: "/admin/procedures/create",
        icon: ""
      },
      {
        title: "لیست روش های اجرایی",
        to: "/admin/procedures",
        icon: ""
      },
      
    ],
  },
  {
    id: 4,
    title: "کاربران",
    path: 'users',
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    icon: IconsAdminUsers,
    submenu: [
      {
        title: "لیست کاربران",
        to: "/admin/users",
        icon: ""
      },
      {
        title: "ایجاد کاربر جدید",
        to: "/admin/users/create",
        icon: ""
      },
    ],
  },
  {
    id: 5,
    title: "گروه های کاربری",
    path: 'roles',
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    icon: IconsAdminRole,
    submenu: [
      {
        title: "ایجاد نقش",
        to: "/admin/roles/create",
        icon: ""
      },
      {
        title: "لیست نقش ها",
        to: "/admin/roles",
        icon: ""
      }
    ],
  },
  {
    id: 6,
    title: "مجوزها",
    path: 'permissions',
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    icon: IconsPermission,
    submenu: [
      {
        title: "ایجاد مجوز",
        to: "/admin/permissions/create",
        icon: ""
      },
      {
        title: "لیست مجوز ها",
        to: "/admin/permissions",
        icon: ""
      }
    ],
  },
  
])
const route = useRoute()
const toggleMenu = (item: MenuItem) => {
  item.isSubmenuOpen = !item.isSubmenuOpen
  if (item.isSubmenuOpen) {
    item.selected = true
  }
}
watch(() => route.path, (newPath) => {
  const firstPath = newPath.split('/')[1];
  const menuItem = menuList.value.find((item) => item.path === `${firstPath}`);
  if (menuItem) {
    menuItem.selected = true
    menuItem.isSubmenuOpen = true
    menuList.value.forEach((item) => {
      if (item !== menuItem) {
        item.selected = false;
        item.isSubmenuOpen = false;
      }
    })
  }
}, {
  immediate: true
})
</script>

<style scoped>
.dashboard-item::before {
  align-self: stretch;
  content: "";
  width: 4px;
  display: inline-block;
  border-radius: 2px 0px 0px 2px;
  background: linear-gradient(180deg, #00000000 0%, #00000000 100%);
}

.dashboard-item:hover {
  background: #252525;
}

.selected-dashboard-item::before {
  background: linear-gradient(180deg, #FF7028 0%, #994318 100%) !important;
}

.selected-dashboard-item {
  color: #FF7028;
}

.sub-menu-arrow {
  transition: transform 0.3s ease-in;
  transform: rotate(0);
}

.sub-menu-arrow-open {
  transform: rotate(180deg);
}
</style>