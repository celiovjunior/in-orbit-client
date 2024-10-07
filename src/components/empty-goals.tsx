import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in orbit logo" />
      <img
        src={letsStart}
        alt="home page illustration of woman launching a rocket"
      />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        You haven't set any goals yet, how about setting one right now?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="s-4" />
          Set goal
        </Button>
      </DialogTrigger>
    </div>
  )
}
