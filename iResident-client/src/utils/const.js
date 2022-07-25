import AppImages from "../assets/images";
import Routes from "../router/routes";
import { Guest_Status, Transition_Mode } from "./enum";
import string from "./string";

export const constant = {
  profileimage:
    "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  name: "Alex tong",
  email: "test@test.com",
  location:
    "Av. 115 (Arco vial) casi esq. con Av. 28 de julio, Playa del Carmen, Q Roo, Mex.",
  address: "OSCAR VICENTE AYESTARAN \nHERNANDEZ",
  upto4companies: "Hasta 4 acompañantes",
  date: "23-01-2021",
};

export const dashboardList = [
  [
    {
      title: string.surveillance,
      icon: AppImages.ic_surveillance,
      navigator: Routes.CheckCode,
    },
    {
      title: string.regulation,
      icon: AppImages.ic_regulation,
      navigator: Routes.DashboardGuide,
    },
  ],
  [
    {
      title: string.guests,
      icon: AppImages.ic_guests,
      navigator: Routes.MyGuests,
    },
    {
      title: string.mailbox,
      icon: AppImages.ic_mailbox,
    },
  ],
  [
    {
      title: string.notification,
      icon: AppImages.ic_notification,
    },
  ],
];
export const dashboardGuideList = [
  [
    {
      title: "Verificar invitados",
      icon: AppImages.ic_qr_code,
    },
    {
      title: "Informes",
      icon: AppImages.ic_note_pen,
    },
  ],
  [
    {
      title: "Recorridos",
      icon: AppImages.ic_surveillance,
    },
  ],
];
export const incomeTypeList = [
  {
    title: string.ownvehical,
    icon: "directions-car",
  },
  {
    title: string.taxiorother,
    icon: "transfer-within-a-station",
  },
];

export const guestCompaniesList = [
  {
    title: string.upto4company,
    icon: "people-outline",
  },
  {
    title: string.morethan4company,
    icon: "people-outline",
  },
];

export const myGuestsList = [
  {
    title: "Francisco Lopez Gimenez",
    date: "Jue 18 de marzo 2020",
    transitionType: Transition_Mode.Car,
    status: Guest_Status.Come,
  },
  {
    title: "Francisco Lopez Gimenez",
    date: "Jue 18 de marzo 2020",
    transitionType: Transition_Mode.Walk,
    status: Guest_Status.NotAuthorized,
  },
  {
    title: "Francisco Lopez Gimenez",
    date: "Jue 18 de marzo 2020",
    transitionType: Transition_Mode.Walk,
    status: Guest_Status.NotAuthorized,
  },
  {
    title: "Francisco Lopez Gimenez",
    date: "Jue 18 de marzo 2020",
    transitionType: Transition_Mode.Car,
    status: Guest_Status.Defeated,
  },

  {
    title: "Francisco Lopez Gimenez",
    date: "Jue 18 de marzo 2020",
    transitionType: Transition_Mode.Car,
    status: Guest_Status.InPlace,
  },
  {
    title: "Francisco Lopez Gimenez",
    date: "Jue 18 de marzo 2020",
    transitionType: Transition_Mode.Car,
    status: Guest_Status.Come,
  },
];

export const ProfileSliderList = [
  {
    title: "Frontemare",
    image: AppImages.bg_slider,
  },
  {
    title: "Frontemare",
    image: AppImages.bg_slider,
  },
  {
    title: "Frontemare",
    image: AppImages.bg_slider,
  },
  {
    title: "Frontemare",
    image: AppImages.bg_slider,
  },
  {
    title: "Frontemare",
    image: AppImages.bg_slider,
  },
  {
    title: "Frontemare",
    image: AppImages.bg_slider,
  },
  {
    title: "Frontemare",
    image: AppImages.bg_slider,
  },
];

export const GuestAccessList = [
  { title: "Name", detail: "OSCAR VICENTE AYESTARAN HERNAN" },
  { title: "Means of access", detail: "Car - RBH304B" },
  { title: "Number of companions", detail: "Up to 4 companions" },
  { title: "Date of stay", detail: "23-01-2021" },
];

export const GuestAccessList1 = [
  { title: "Nombre", detail: "OSCAR VICENTE AYESTARAN HERNAN" },
  { title: "Medio de acceso", detail: "Automovil - RBH304B" },
  { title: "Número de acompañantes", detail: "Hasta 4 acompañantes" },
  { title: "Fecha de permanencia", detail: "23-01-2021" },
];