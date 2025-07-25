<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Courier Tracking and Parcel Management System

## Objective

Build a courier tracking and parcel management system for a logistics company.
Users can book parcels, assign delivery agents, track parcels in real-time, and manage delivery statuses.

## Functional Requirements

### Roles

- **Admin**
- **Delivery Agent**
- **Customer**


### Customer Features

- Register/Login
- Book a parcel pickup (pickup address, delivery address, parcel size/type, COD or prepaid)
- View booking history \& statuses
- Track parcel in real-time on a map


### Delivery Agent Features

- View assigned parcels
- Update status (Picked Up, In Transit, Delivered, Failed)
- Get optimized delivery route (Google Maps API)


### Admin Features

- Dashboard with parcel metrics (daily bookings, failed deliveries, COD amounts)
- Assign agents to parcels
- View all users and bookings
- Export reports (CSV/PDF)


## Backend

**Tech Stack:** Node.js + Express or NestJS + PostgreSQL/MongoDB + JWT

### APIs

- Auth (Register/Login with roles)
- Parcel CRUD
- Agent assignment
- Parcel status updates
- Booking analytics \& reports
- Geolocation tracking via coordinates


### Security

- Role-based access control (middleware)


## Frontend

- Web App for Admin and Customers
- Real-time updates via Socket.IO (status changes)
- Google Maps Integration for tracking and route view


## Advanced (Bonus)

- QR Code generation for parcels
- Barcode scan by agents to confirm pickup/delivery
- Email/SMS notifications for customers
- Multi-language support (e.g., English \& Bengali)


## Deliverables

- GitHub repo with documentation
- Hosted Web App (e.g., Vercel/Netlify)
- Postman collection for backend API
- Final PDF report + video demo


## Evaluation Criteria

- Functional completeness
- Code structure and clean architecture
- Responsive UI and UX polish
- Real-time updates and geolocation handling
- Real-world use cases like COD, failed deliveries, and reports

<div style="text-align: center">⁂</div>

[^1]: Assignment.pdf

