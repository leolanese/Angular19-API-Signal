# Angular (19+) API request using pure reactive signal approach with Separation of Concern (SoC)

![](.//public/httpResource.png)

## Child -> Parent + Child -> Service

We can output to a service instead of a Parent component. This is useful for:
- Communication between unrelated components
- Centralising state management
- Avoiding "prop drilling" through multiple component layers


## SoC notes
if user-card.compoennt access the service: it's no longer considered a pure presentational (dummy) component in the traditional separation of concerns pattern.  This isn't necessarily bad - Angular's dependency injection and signals make this pattern convenient, but it does change the component's classification.

> For strict separation of concerns, you would keep services in container components and use input/output bindings for child components, even with signals.

## Traditional separation:
- Presentational components: Only handle UI rendering, receive data via inputs, emit events via outputs
- Container components: Connect to services, manage state, and pass data down to presentational components

## Modern Angular 19+ approach
This is the modern, dependency injection-based approach that:
- Uses the new inject() function instead of constructor injection
- Follows Angular's best practices for platform detection
- Works seamlessly with Angular's SSR capabilities

It's particularly useful when you need to:
- Access browser-only APIs (like localStorage)
- Perform server-specific operations
- Debug SSR-related issues
- Optimize code for different environments

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

