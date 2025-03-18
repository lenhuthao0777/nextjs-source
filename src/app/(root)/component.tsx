'use client'

import { useEffect } from 'react'

import { signOut, useSession } from 'next-auth/react'

export default function Comp() {
  const session = useSession()

  const handleGoogleSignIn = () => {
    const width = 500
    const height = 600
    const left = window.screenX + (window.outerWidth - width) / 2
    const top = window.screenY + (window.outerHeight - height) / 2

    const popup = window.open('/sign-in', 'Google Sign In', `width=${width},height=${height},left=${left},top=${top}`)

    // Add message listener for auth completion
    window.addEventListener('message', function onMessage(event) {
      // Verify origin for security
      if (event.origin !== window.location.origin) return

      if (event.data === 'signInComplete') {
        popup?.close()
        window.removeEventListener('message', onMessage)
        // Optionally refresh the page or update UI
        window.location.reload()
      }
    })
  }

  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage('signInComplete', window.location.origin)
      window.close()
    }
  }, [])
  return (
    <>
      {session.data?.user ? (
        <button type="button" className="bg-gray-7 border-gray-1 text-black-2 w-full max-w-[222px] border text-xs font-semibold" onClick={() => handleGoogleSignIn()}>
          Liên kết với Google
        </button>
      ) : (
        <button type="button" className="bg-gray-7 border-gray-1 text-black-2 w-full max-w-[222px] border text-xs font-semibold" onClick={() => signOut()}>
          Logout
        </button>
      )}
    </>
  )
}
