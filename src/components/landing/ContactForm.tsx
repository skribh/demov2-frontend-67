
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('https://script.google.com/macros/s/AKfycbwl4E650L9w9q_8csmIZiTLlbxSpeY89wSF9lu58tVYLqh9gLfCaDwKSmAcFETMiMqIug/exec', {
      method: 'POST',
      body: formData
    });

    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setEmail('');
    setMessage('');
    setName('');
    setHoneypot('');

    downloadPdf();
  };

  const downloadPdf = () => {
    const element = document.createElement("a");
    element.href = "jess-pitch-deck.pdf";
    element.download = "Investors.pdf";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="contact" className="py-20 bg-black border-t border-zinc-800">
      <div className="skribh-container">
        <div className="skribh-grid">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Started with Skribh Today</h2>
            <p className="text-xl text-zinc-300 mb-8">
              Contact us to learn how Skribh can transform your documentation workflow and improve patient care.
            </p>
            <div className="mb-8">
              <img 
                src="/lovable-uploads/a41c1049-9f0b-499a-bf85-4debfe508b1d.png" 
                alt="Star of Life Medical Symbol" 
                className="w-24 h-24 opacity-60"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <form onSubmit={handleContact} className="space-y-6">
              <div>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-14 border-2 border-red-600 rounded-none bg-black text-white"
                />
              </div>
              <div>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 border-2 border-red-600 rounded-none bg-black text-white"
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="border-2 border-red-600 rounded-none min-h-[150px] bg-black text-white"
                />
              </div>
              <input
                id="honeypot"
                name="honeypot"
                className="hidden"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
              <Button type="submit" className="skribh-button w-full">
                Send Message <Mail className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
