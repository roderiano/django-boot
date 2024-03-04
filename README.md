<div align="center">
  <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha9Ty2m5RaI_FiohDISSAXRNC7gy4VsN4TG5taO95mtGCdGX9gbGXZ3mLwB7MbbdvEiCRn0cnos0GIHFFkbwsjol4u-Lw=w3584-h1816" alt="Logo" width="100px" style="display: inline-block; vertical-align: middle;">
  <h1 style="display: inline-block; vertical-align: middle; margin-left: 10px;">django-boot</h1>
</div>


django-boot is a Django app framework designed for styling the admin interface with Bootstrap 5.

## Getting Started

### Installation

1. You can install django-boot via pip:

    ```bash
    pip install django-boot
    ```
    
## Usage

To use django-boot in your Django project, follow these steps:

1. Add `django_boot` to the INSTALLED_APPS in your settings.py file:

```python3
INSTALLED_APPS = [
    ...,
    "django_boot.apps.django-bootConfig",
    ...
]
```

**::warning:: If you encounter any issues or have questions, feel free to open an issue for assistance.**


## Features

- **Automatic Dark Mode**

- **Dynamic Form Styling**

- **Alert Styling**

- **Dynamic Sidebar**

- **Interactive Side Filters**

- **Custom Login Styling**

<p align="center">
  <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha84RmWCKrO4FPYthfL4AfwLuQpCWJyjg2jksP84U6euTQ4cSduMCTuH-6PQc7PppA8KoZHiOvIBW7urUXNkq7-36AQ=w1360-h633" alt="Logo" width="100%">
</p>



## Contributing
Contributions are welcome! If you have suggestions, bug reports, or want to discuss new features, please open an issue to start a discussion.

For implementing new features or fixing bugs:

1. Fork the repository.

2. Create a new branch from the `develop` branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes and ensure the code follows the project's coding standards.

4. Test your changes thoroughly. If you wish to build the application, you can run the following command:

    ```python3
    python3 setup.py sdist
    ```

5. Commit your changes:

    ```bash
    git commit -m "Add your concise and meaningful commit message"
    ```

6. Push your branch to your fork:

    ```bash
    git push origin feature/your-feature-name
    ```

7. Open a pull request against the `develop` branch, describing your changes and referencing the related issue.

8. Your pull request will be reviewed, and once approved, it will be merged.

Thank you for contributing to django-boot!

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
django-boot provides integration with the components and styles provided by Bootstrap, allowing you to easily create attractive and responsive user interfaces. Additionally, you can find additional resources such as usage examples and detailed documentation on the official Bootstrap and Django website.
- [License](https://github.com/roderiano/django-boot/blob/main/LICENSE)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Django Reusable Apps](https://docs.djangoproject.com/en/5.0/intro/reusable-apps/)
