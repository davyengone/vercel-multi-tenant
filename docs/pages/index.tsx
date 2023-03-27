import Link from 'next/link'

export default function Docs() {
  return (
    <div>
      <p>This is Documentation page</p>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">About us</Link>
      </div>
    </div>
  )
}
