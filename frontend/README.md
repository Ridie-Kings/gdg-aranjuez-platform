# CodeCrypt - Documentación Técnica

## 1. Descripción General

CodeCrypt es una plataforma de aprendizaje y comunidad para programadores con una temática única de cripta/halloween. La aplicación está construida con Next.js 15 y ofrece una experiencia personalizada para desarrolladores en diferentes etapas de su carrera.

### 1.1 Características Principales
- Sistema de autenticación personalizado
- Perfil de usuario personalizable
- Foro de discusión
- Recursos de aprendizaje
- Sistema de retos
- Experiencia de onboarding personalizada

## 2. Arquitectura Técnica

### 2.1 Stack Tecnológico
```json
{
  "Frontend": {
    "Framework": "Next.js 15",
    "UI Library": "React 18",
    "Styling": ["Tailwind CSS", "SASS"],
    "Animaciones": "Framer Motion",
    "Iconografía": ["Lucide React", "React Icons"],
    "Validación": "Zod",
    "HTTP Client": "Axios",
    "TypeScript": "^5"
  }
}
```

### 2.2 Estructura de Carpetas
```
/app
├── foro/                # Sección de foro
├── home/                # Página principal
├── login/               # Autenticación
├── register/            # Registro
├── recursos/            # Recursos educativos
├── settings/           # Configuración
└── trucos/             # Sección de retos

/components
├── auth/               # Componentes de autenticación
├── elements/           # Componentes UI base
├── icons/              # Iconos personalizados
└── layout/            # Componentes estructurales

/services
├── Users/
│   ├── auth/          # Servicios de autenticación
│   └── info/          # Servicios de información
```

## 3. Flujos de Usuario

### 3.1 Proceso de Registro y Onboarding

#### Registro
```typescript
interface RegisterForm {
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
}
```

#### First Connection (Onboarding)
1. **Nivel de Habilidad**:
   - Novato
   - Principiante
   - Intermedio
   - Avanzado
   - Experto

2. **Etapa de Carrera**:
   - Sin experiencia
   - Estudiante
   - Profesional

3. **Especialización**:
   - Desarrollo Web
   - Desarrollo Móvil
   - Desarrollo de Videojuegos
   - Ingeniero de IA
   - Ciberseguridad
   - Ingeniería de datos

4. **Lenguaje Base**:
   - JavaScript
   - Python
   - Java
   - C++

### 3.2 Sistema de Autenticación

```typescript
interface AuthContextType {
    user: sessionType | null;
    login: (formData: FormData) => Promise<FormState>;
    register: (formData: FormData) => Promise<FormState>;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}
```

## 4. Diseño y UI

### 4.1 Tema Principal
```css
:root {
  --color-orange: #FF7518;
  --color-gray: customGray;
  --color-background: #000;
}
```

### 4.2 Efectos Visuales
- Animaciones con Framer Motion
- Sombras personalizadas
- Efectos de hover
- Animaciones de rebote
- Efectos de parpadeo

### 4.3 Componentes UI Principales
1. **NavBar**:
   - Logo central
   - Navegación principal
   - Avatar de usuario
   - Efectos de hover personalizados

2. **Formularios**:
   - Diseño temático
   - Validación en tiempo real
   - Mensajes de error personalizados
   - Iconos interactivos

3. **Botones**:
   - Estilos personalizados
   - Estados hover/active
   - Variantes de color

## 5. Seguridad

### 5.1 Autenticación
- Tokens JWT
- Cookies HTTP-only
- Validación en cliente y servidor
- Rutas protegidas

### 5.2 Validación de Datos
```typescript
const registerSchema = z.object({
    email: z.string().email("El email no es válido"),
    username: z.string()
        .min(4, "El nombre de usuario debe tener al menos 4 caracteres")
        .max(20, "El nombre de usuario no puede tener más de 20 caracteres"),
    password: z.string().trim()
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    repeatPassword: z.string().trim(),
});
```

## 6. API y Servicios

### 6.1 Endpoints Principales
```typescript
const API = {
    auth: {
        login: (email: string, password: string) => Promise<Response>,
        register: (username: string, email: string, password: string) => Promise<Response>,
    },
    info: {
        getMyProfile: (token: string) => Promise<Response>,
        getUserByUsername: (token: string, username: string) => Promise<Response>,
    }
};
```

### 6.2 Tipos de Respuesta
```typescript
interface FormState {
    success: boolean;
    data: {
        code?: number;
        message?: string | { token: string | undefined; }
        client?: { [key: string]: string };
    };
}
```

## 7. Secciones Principales

### 7.1 Foro
- Discusiones por categoría
- Sistema de comentarios
- Filtros y búsqueda

### 7.2 Recursos
- Materiales de aprendizaje
- Documentación
- Enlaces útiles

### 7.3 Retos
- Ejercicios de programación
- Sistema de puntuación
- Niveles de dificultad

## 8. Guías de Desarrollo

### 8.1 Añadir Nuevas Características
1. Crear componentes en `/components`
2. Implementar lógica en `/services`
3. Actualizar rutas en `/app`
4. Documentar cambios

### 8.2 Estándares de Código
- TypeScript estricto
- Componentes funcionales
- Hooks personalizados
- Validación Zod

### 8.3 Convenciones de Estilo
```css
.component {
    @apply border border-customOrange rounded-md;
    @apply text-customGray;
    @apply shadow-glow-orange;
}
```

## 9. Gestión de Estado

### 9.1 Context API
- AuthContext para autenticación
- UserContext para datos de usuario
- ThemeContext para personalización

### 9.2 Estados Locales
- useState para UI
- useEffect para efectos secundarios
- Custom hooks para lógica reutilizable

## 10. Performance

### 10.1 Optimizaciones
- Next.js App Router
- Lazy loading de componentes
- Optimización de imágenes
- Caché de datos

### 10.2 Métricas Clave
- Tiempo de carga inicial
- Tiempo de interacción
- Core Web Vitals

## 11. Deployment

### 11.1 Scripts
```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

### 11.2 Requerimientos
- Node.js
- TypeScript
- Axios
- Framer-Motion
- React
- React-dom
- React-icons / lucide-react
- Sass
- Zod

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 👥 Autores

* **Juanan Pareja** - *Trabajo Inicial* - [Juanandub](https://github.com/juanandub)
* **Fran Salvatierra** - *Trabajo Inicial* - [Ridie-Kings](https://github.com/Ridie-Kings)
* **Matias** - *Frontend developer* - [MatiasSargo](https://github.com/MatiasSargo)
* **Allan Boussemart** - *Frontend developer* - [albocoq](https://github.com/albocoq)
