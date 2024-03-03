export default function pageSettings(title: string, description = ''): void {
  document.title = title
  document.querySelector('[name=description]')?.setAttribute('content', description)
}
