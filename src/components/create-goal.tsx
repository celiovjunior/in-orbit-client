import {
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from './ui/dialog'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from '../radio-group'

export function CreateGoal() {
  return (
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
            Add activities that make you feel good and that you want to continue
            practicing every week.
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
  )
}
