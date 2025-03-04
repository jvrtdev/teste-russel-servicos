import { ProductCardProps } from "../@types/product-card.props"

export const LogitechProducts: ProductCardProps[] = [
  {
    id: 1,
    currentPrice: 814.9,
    originalPrice: 1500.45,
    slug: "mouse-gamer-sem-fio-logitech-g-pro-1",
    title:
      "Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 com Lightspeed, 32000 DPI, Sensor Hero 2, com Bateria Recarregável, Preto",
    src: "/products/logitech/Image-1.png",
  },
  {
    id: 2,
    currentPrice: 499.99,
    originalPrice: 705.87,
    slug: "mouse-gamer-sem-fio-logitech-g502-2",
    title:
      "Mouse Gamer Sem Fio Logitech G502 LIGHTSPEED RGB LIGHTSYNC, Ajuste Peso, 11 Botões, Recarregável, Compatível POWERPLAY",
    src: "/products/logitech/Image-2.png",
  },
  {
    id: 3,
    slug: "headset-gamer-sem-fio-logitech-g-astro-a30-3",
    currentPrice: 1499.99,
    originalPrice: 1999.99,
    title:
      "Headset Gamer Sem Fio Logitech G Astro A30, Drivers 40mm, Bluetooth, PS e PC, Azul Escuro",
    src: "/products/logitech/Image-3.png",
  },
  {
    id: 4,
    slug: "caixa-de-som-logitech-g560-4",
    currentPrice: 1777.77,
    originalPrice: 999.9,
    title:
      "Caixa de som Logitech G560 com RGB LIGHTSYNC, Sistema 2.1 e Conexão Bluetooth, USB ou 3,5mm",
    src: "/products/logitech/Image-4.png",
  },
]

export const VideoCards: ProductCardProps[] = [
  {
    id: 5,
    slug: "placa-de-video-rx-6600-cld-8gb-5",
    title: "Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6",
    src: "/products/product-1.png",
    currentPrice: 1349.99,
    originalPrice: 2267.47,
  },
  {
    id: 6,
    slug: "placa-de-video-rx-6750xt-gaming-xfx-6",
    title:
      "Placa de Vídeo RX 6750XT Gaming XFX Graphics Card AMD Radeon, 12GB GDDR6, Ray tracing, Fidelity FX",

    src: "/products/product-2.png",
    currentPrice: 2999.99,
    originalPrice: 4229.29,
  },
  {
    id: 7,
    slug: "placa-de-video-rtx-4060-aero-oc-gigabyte-nvidia-geforce-7",
    title:
      "Placa de Vídeo RTX 4060 AERO OC Gigabyte NVIDIA GeForce, 8GB GDDR6, RGB, DLSS, Ray Tracing, Branco",

    src: "/products/product-3.png",
    currentPrice: 2499.99,
    originalPrice: 3599.99,
  },
  {
    id: 8,
    slug: "placa-de-video-gtx-1650-d6-ventus-xs-ocv3-msi-nvidia-geforce-8",
    title:
      "Placa de Vídeo GTX 1650 D6 Ventus XS OCV3 MSI NVIDIA GeForce, 4GB GDDR6, G- Sync",

    src: "/products/product-4.png",
    currentPrice: 799.99,
    originalPrice: 947.36,
  },
  {
    id: 9,
    slug: "placa-de-video-gigabyte-radeon-rx-6600-eagle-amd-8gb-gddr6-preto-9",
    title: "Placa de Vídeo Gigabyte Radeon RX 6600 EAGLE AMD, 8GB GDDR6, Preto",
    src: "/products/product-5.png",
    currentPrice: 1399.99,
    originalPrice: 2477.94,
  },
]

export const AllProducts = [...LogitechProducts, ...VideoCards]
