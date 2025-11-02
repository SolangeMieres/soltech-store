# SOLtech Store — Next.js + Tailwind + MercadoPago (Sandbox)

Tienda estilo **dark tech** con checkout de **MercadoPago** y cálculo de **envío por Código Postal**.

## 1) Variables de entorno

Crear **.env.local** en la raíz con tus *credenciales de PRUEBA*:

```
MERCADOPAGO_PUBLIC_KEY=TU_PUBLIC_KEY
MERCADOPAGO_ACCESS_TOKEN=TU_ACCESS_TOKEN
```

## 2) Ejecutar local

```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## 3) Deploy en Vercel (gratis)

1. Subí este repo a GitHub.
2. En Vercel → "New Project" → importá el repo.
3. En **Settings → Environment Variables** agregá las mismas variables.
4. Deploy y listo 🙌

## 4) Imágenes

Las imágenes de ejemplo están en `/public/img`. Reemplazalas por fotos reales.

## 5) Envíos por CP (demo)

En `components/ShippingCalculator.js` podés editar las reglas de envío:
- 1000-1499 = CABA
- 1500-1899 = AMBA
- Resto = Interior

> Si tenés tarifas reales por transportista, podés mover esta lógica a un endpoint o integrar una API.

## 6) WhatsApp

- Botón fijo para **consultas directas** a tu número.
- Botón para **seguir el canal** oficial.

## 7) MercadoPago

`/pages/api/checkout.js` crea una **preferencia** y abre el *checkout* en una nueva pestaña.
Si ves errores:
- Revisá **MERCADOPAGO_ACCESS_TOKEN**.
- Probá con montos mayores a $100.
- Recordá que esto usa **Sandbox**.

---

**Lema:** “Innovación que impulsa tus ideas. Tecnología confiable, al alcance de todos.”
