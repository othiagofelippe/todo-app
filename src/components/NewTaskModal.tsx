import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from './Button'
import { Input } from './Input'
import { DotsThreeOutlineVertical, XCircle } from '@phosphor-icons/react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
})

export function NewTaskModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button>
          <DotsThreeOutlineVertical
            size={24}
            weight="fill"
            className="hover:opacity-70"
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-500 opacity-50 fixed inset-0" />

        <Dialog.Content className="fixed  top-2/4 left-2/4 max-h-[85vh] max-h w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-gray-800 p-6 focus:outline-none">
          <Dialog.Title
            className={`text-white text-xl m-0 font-bold ${roboto.className}`}
          >
            Criar Tafera
          </Dialog.Title>

          <Dialog.Description
            className={`text-gray-300 mt-3 text-sm font-light leading-normal ${roboto.className}`}
          >
            Digite o nome e a categoria da sua nova tarefa, depois clique em
            {" '"}Adicionar tarefa{"'"}. Certifique-se de escolher um nome que
            descreva claramente a tarefa. Você pode editar ou excluir a tarefa a
            qualquer momento. Boa sorte!
          </Dialog.Description>
          <form>
            <div className="flex flex-col gap-5 mt-8">
              <Input
                id="task"
                label="Tarefa:"
                placeholder="Digite o nome da tarefa aqui"
                className="w-full"
              />
              <Input
                id="category"
                label="Categoria:"
                placeholder="Digite o nome da categoria aqui"
                className="w-full"
              />
            </div>

            <div className="mt-10">
              {/* <Dialog.Close asChild> */}
              <Button className="w-full" type="submit">
                Adicionar tarefa
              </Button>
              {/* </Dialog.Close> */}
            </div>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute top-3 t right-3 inline-flex h-6 w-6 appearance-none items-center justify-center focus:outline-none"
              aria-label="Close"
            >
              <XCircle
                size={24}
                weight="fill"
                className="text-gray-400 hover:text-gray-300 transition-all"
              />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
