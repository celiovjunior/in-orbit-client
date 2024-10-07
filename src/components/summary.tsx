import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span>5 to 10 of October</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="s-4" />
            Set goal
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}
