'use client'

import dynamic from 'next/dynamic'

const SearchPageContent = dynamic(
  () => import('./SearchPageClient'),
  { ssr: false }
)

export default function SearchClientWrapper() {
  return <SearchPageContent />
}