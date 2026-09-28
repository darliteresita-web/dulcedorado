<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Contenido del sitio
El contenido editable (empresa, productos, servicios, noticias, contacto) vive en `src/config/site.ts` y `src/data/*.ts`; los componentes solo consumen esos datos para que el cliente pueda actualizar textos sin tocar la estructura.
