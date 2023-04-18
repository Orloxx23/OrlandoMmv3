import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router';
import React from 'react';

export default function Layout({ children }) {
    const router = useRouter();
    const isOpen = router.pathname !== '/';

    const handleOpenChange = (open) => {
        if (!open) router.push('/', undefined, {scroll: false});
    }

    const [currentProject, setCurrentProject] = React.useState(isOpen ? (router.query.project) : null);

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        {children}
    </Dialog.Root>
  )
}
