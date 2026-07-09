# Perfect Doors Website & CMS

<div align="center">

### Production-ready Product Management Platform

A Laravel-based business platform featuring a normalized product catalog, custom CMS, product variants, category management, and scalable database architecture.

<br>

[![Portfolio](https://img.shields.io/badge/Portfolio-Case%20Study-111827?style=for-the-badge)](https://faizans-portfolio.vercel.app/)
[![Laravel](https://img.shields.io/badge/Laravel-red?style=for-the-badge&logo=laravel)]
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php)]
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql)]
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap)]

</div>

---

# Overview

Perfect Doors is a business website and product management platform developed to simplify catalog management for a growing door manufacturing business.

The project combines a customer-facing website with a custom administration panel, allowing staff to manage products, categories, pricing, variants, and website content without requiring developer assistance.

A major engineering objective was designing a scalable relational database capable of supporting multiple product variants while avoiding duplicate data.

---

# Business Problem

The client maintained a growing catalog where every combination of size, finish, and pricing resulted in duplicated records.

Updating descriptions, prices, or specifications required editing multiple rows, increasing maintenance effort and the risk of inconsistent data.

The business needed a maintainable system that would support future growth while allowing administrators to manage the entire catalog independently.

---

# Solution

A normalized relational database was designed before implementation.

Shared product information was separated from variant-specific attributes, allowing multiple sizes, finishes, prices, and stock information to be managed through linked tables rather than duplicated records.

A custom CMS was then developed on top of this architecture, giving administrators complete control over products, categories, and website content.

---

# Key Features

## Product Management

- Product CRUD operations
- Category management
- Product variant management
- Pricing management
- Stock visibility
- Product images

---

## Variant Engine

- Multiple sizes
- Multiple finishes
- Independent pricing
- Stock status
- Variant relationships

---

## Custom CMS

- Secure administrator login
- Product management
- Category management
- Dynamic website content
- Business information management

---

## Public Website

- Responsive design
- Product browsing
- Category filtering
- Product detail pages
- Business information pages

---

# Project Screenshots

## Home Page

![](Screenshot-1.png)

---

## Product Management

![](Screenshot-2.png)

---

## CMS Dashboard

![](Screenshot-3.png)

---

# Technology Stack

## Backend

- Laravel
- PHP
- Eloquent ORM

## Frontend

- Blade
- Bootstrap
- JavaScript
- HTML5
- CSS3

## Database

- MySQL

## Tools

- Git
- Composer
- VS Code

---

# High-Level Architecture

```text
Administrator
        │
        ▼
   Admin Dashboard
        │
 ┌──────┼──────────────┐
 │      │              │
Products Categories  Variants
 │      │              │
 └──────┼──────────────┘
        │
   Eloquent ORM
        │
      MySQL
        │
 Public Website
```

---

# Database Design

One of the most important engineering decisions in this project was designing a normalized schema before writing application code.

The architecture separates shared product information from variable product attributes.

```
Product
   │
   ├──────────────┐
   │              │
Variant 1     Variant 2
(Size)        (Finish)
   │              │
Price        Stock
```

This approach reduced redundancy, simplified maintenance, and made future expansion significantly easier.

---

# Installation

## Clone Repository

```bash
git clone https://github.com/mfaizanx7/perfect-doors-cms.git
```

## Install Dependencies

```bash
composer install
```

## Configure Environment

```bash
cp .env.example .env

php artisan key:generate
```

## Database

```bash
php artisan migrate
```

## Run Project

```bash
php artisan serve
```

---

# Deployment

The project was deployed as a production business website.

Deployment included:

- Environment configuration
- Database migration
- Storage permissions
- SSL configuration
- Production verification
- Business content migration

---

# Engineering Challenge

## Designing a Scalable Product Variant Model

The biggest challenge was supporting multiple product combinations without creating duplicate records.

A naive implementation would have created separate rows for every size and finish combination, making updates difficult and increasing long-term maintenance costs.

---

# Solution

Before implementation, the complete database model was designed on paper.

Shared product information and variable attributes were separated into related tables using foreign-key relationships.

This architecture reduced duplication, simplified updates, and produced a significantly more maintainable application.

---

# Lessons Learned

This project strengthened my understanding of database-first application design.

Key takeaways included:

- Design the data model before writing application code.
- Normalization improves maintainability.
- Good database architecture reduces application complexity.
- Relational modeling is critical for scalable business applications.
- Investing time in planning saves significant development effort later.

---

# Future Improvements

Potential future enhancements include:

- Product search
- Inventory management
- Order management
- Customer accounts
- REST API
- Image optimization
- Role-based permissions
- Docker deployment
- CI/CD pipeline

---

# Repository Status

| Status | Value |
|--------|-------|
| Project | Completed |
| Production | ✅ Live |
| Repository | Active |
| Documentation | Complete |

---

# License

This repository is shared for portfolio and educational purposes.

---

# Author

## Muhammad Faizan Khan

Full-Stack Web Developer

Building production-ready web applications using Laravel, PHP, React.js, Node.js, and MySQL.

### Connect

Portfolio

https://faizans-portfolio.vercel.app

LinkedIn

https://linkedin.com/in/muhammad-faizan-khan-x7

GitHub

https://github.com/mfaizanx7

---

<div align="center">

### Thank you for visiting this repository.

If you found this project interesting, consider giving it a ⭐.

</div>
