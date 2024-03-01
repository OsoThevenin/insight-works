import clsx from 'clsx';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingCards } from '@/lib/constants';

export default function Home() {
  return (
    <main>
      <section className="relative flex size-full flex-col items-center justify-center pt-36">
        {/* grid */}
        {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <p className="text-center">Run your agency, in one place</p>
        <div className="relative bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
          <h1 className="text-center text-8xl font-bold">InsightWorks</h1>
        </div>
        <div className="relative mt-0 flex items-center justify-center md:mt-0">
          <Image
            src="/assets/preview.webp"
            alt="InsightWorks banner"
            width={1200}
            height={1200}
            className="rounded-t-2xl border-2 border-muted"
          />
          <div className="absolute inset-x-0 bottom-0 top-[50%] z-10 bg-gradient-to-t dark:from-background" />
        </div>
      </section>
      <section className="mt-20 flex flex-col justify-center gap-4">
        <h2 className="text-center text-4xl">Choose what suits your right</h2>
        <p className="text-balance text-center text-muted-foreground">
          Our straightforward pricing plans are tailored to your needs. No
          hidden fees, no extra charges. If {`you're`} not <br /> ready to
          commit you can get started for free.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx('flex w-[300px] flex-col justify-between', {
                'border-2 border-primary': card.title === 'Unlimited Saas',
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    'text-muted-foreground': card.title !== 'Unlimited Saas',
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.title)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  <span>/ m</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {pricingCards
                    .find((c) => c.title === card.title)
                    ?.features.map((feature) => (
                      <div key={feature} className="flex gap-2">
                        <Check />
                        <p>{feature}</p>
                      </div>
                    ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    'w-full rounded-md bg-primary p-2 text-center',
                    {
                      '!bg-muted-foreground': card.title !== 'Unlimited Saas',
                    },
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
