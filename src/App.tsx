import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'
import { Plus, X } from 'lucide-react'
import { Button } from './components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from './radio-group'

export function App() {
  return (
    <Dialog>
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

      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle>Create goal</DialogTitle>
              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>

            <DialogDescription>
              Add activities that make you feel good and that you want to
              continue practicing every week.
            </DialogDescription>
          </div>
          <form className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">What's the activity?</Label>
                <Input
                  id="title"
                  autoFocus
                  placeholder="Working out, meditate, study..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">How many time in the week?</Label>
                <RadioGroup>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      1x week
                    </span>
                    <span className="text-lg leading-none">🥱</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      2x week
                    </span>
                    <span className="text-lg leading-none">🙂</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      3x week
                    </span>
                    <span className="text-lg leading-none">😎</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      4x week
                    </span>
                    <span className="text-lg leading-none">😜</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      5x week
                    </span>
                    <span className="text-lg leading-none">🤨</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      6x week
                    </span>
                    <span className="text-lg leading-none">🤯</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      Every day
                    </span>
                    <span className="text-lg leading-none">🔥</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button className="flex-1">Save</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
