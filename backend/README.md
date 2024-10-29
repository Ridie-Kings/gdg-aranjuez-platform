# CodeCrypt - Backend API

## 📋 Descripción

CodeCrypt es una plataforma de aprendizaje gamificada diseñada para facilitar el aprendizaje de programación a través de desafíos, sistema de logros y una comunidad interactiva.

## 🛠️ Tecnologías Utilizadas

- **NestJS**: Framework backend
- **TypeORM**: ORM para gestión de base de datos
- **PostgreSQL**: Base de datos relacional
- **JWT**: Autenticación y autorización
- **bcrypt**: Encriptación de contraseñas
- **Swagger**: Documentación de API
- **Jest**: Testing (preparado en la estructura)

## 🏗️ Arquitectura

El sistema está organizado en varios módulos principales:

### 1. Sistema de Usuarios
- Gestión completa de usuarios
- Sistema de niveles y progresión
- Perfiles personalizables
- Autenticación segura

### 2. Sistema de Desafíos
- Desafíos categorizados por dificultad (EASY, MEDIUM, HARD)
- Tracking de progreso
- Validación de completitud
- Asociación con materias/temas

### 3. Sistema de Insignias
- Logros desbloqueables
- Tracking de insignias por usuario
- Asociación con materias y desafíos
- Sistema de recompensas

### 4. Sistema de Contenido Social
- Posts y comentarios
- Interacción entre usuarios
- Compartir logros y progreso

## 🗄️ Estructura de Base de Datos

### Entidades Principales:

#### UserEntity
```typescript
- uuid: string (PK)
- username: string (unique)
- email: string (unique)
- password: string (hashed)
- level: UserLevelEntity
- badges: UserBadgeEntity[]
- posts: PostEntity[]
- comments: CommentEntity[]
- challenges: UserChallengeEntity[]
```

#### ChallengeEntity
```typescript
- uuid: string (PK)
- title: string
- description: string
- difficulty: Enum(EASY, MEDIUM, HARD)
- version: number
- subject: SubjectEntity
```

#### BadgeEntity
```typescript
- uuid: string (PK)
- name: string
- description: string
- icon: string
- subject: SubjectEntity
```

## 🔐 Autenticación y Seguridad

### Sistema de Autenticación
- JWT para gestión de sesiones
- Tokens de acceso con expiración de 24 horas
- Rate limiting para prevenir ataques de fuerza bruta
- Encriptación de contraseñas con bcrypt

### Endpoints de Autenticación
```
POST /auth/register - Registro de usuario
POST /auth/login    - Inicio de sesión
POST /auth/logout   - Cierre de sesión
GET  /auth/check    - Verificación de disponibilidad de usuario
```

## 📡 API Endpoints

### Usuarios
```
GET    /user/:username      - Obtener información de usuario
POST   /user/create        - Crear nuevo usuario
GET    /user/:uuid/badges  - Obtener insignias de usuario
```

### Desafíos
```
POST   /challenge/create    - Crear nuevo desafío
GET    /challenge/all      - Listar todos los desafíos
GET    /challenge/:substr  - Buscar desafíos por título
DELETE /challenge/:uuid    - Eliminar desafío
```

### Insignias
```
POST   /badges/createBadge     - Crear nueva insignia
GET    /user-badges/:name/users - Obtener usuarios con insignia específica
GET    /user-badges/:username/badges - Obtener insignias de usuario
```

## 🚀 Instalación y Configuración

1. Clonar el repositorio
```bash
git clone <repository-url>
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
# .env
PORT=your_port
JWT_SECRET=your_secret_key
DB_HOST=your_dbhost
DB_PORT=your_dbport
DB_USERNAME=your_dbuser
DB_PASSWORD=your_dbpassword
DB_DATABASE=your_dbname
```

4. Iniciar la base de datos
```bash
# Asegúrate de tener PostgreSQL instalado y corriendo
```

5. Iniciar la aplicación
```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

## 📚 Documentación API

La documentación detallada de la API está disponible en:
```
http://localhost:{your_port}/api
```

## 🔄 Rate Limiting

La API implementa limitación de tasa:
- 10 solicitudes por minuto por IP
- Aplicado globalmente a todos los endpoints
- Personalizable por ruta específica

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Ejecutar tests e2e
npm run test:e2e

# Coverage de tests
npm run test:cov
```

## 📝 Convenciones de Código

- Utilizar TypeScript estricto
- Seguir principios SOLID
- Documentar métodos públicos
- Utilizar DTOs para transferencia de datos
- Mantener servicios stateless

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 👥 Autores

* **Fran Salvatierra** - *Trabajo Inicial* - [Ridie-Kings](https://github.com/Ridie-Kings)
* **Juanan Pareja** - *Trabajo Inicial* - [Juanandub](https://github.com/juanandub)
* **Ángel López** - *Trabajo Inicial* - [almAngel](https://github.com/almAngel)

## ✨ Agradecimientos

* Gracias a todos los que han contribuido con código
* A la comunidad de NestJS por su excelente documentación