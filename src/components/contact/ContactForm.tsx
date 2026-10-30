import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'Junior Software Engineer Opportunity',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be blank.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Frontend validation & simulation (connect your Formspree/Resend API endpoint here)
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Junior Software Engineer Opportunity',
        message: '',
      });
      setErrors({});
    }, 800);
  };

  return (
    <div className="p-6 sm:p-8 rounded-lg bg-surface border border-surface-border">
      {status === 'success' ? (
        <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-typography-primary">
            MESSAGE TRANSMITTED
          </h3>
          <p className="text-sm text-typography-secondary max-w-md">
            Thank you for reaching out! I check my messages regularly and will get back to you within 24 hours.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus('idle')}
            className="mt-4"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="border-b border-surface-border pb-4 mb-6">
            <div className="font-mono text-xs text-typography-muted uppercase tracking-wider">
              MESSAGE_DISPATCH // INQUIRY_PROTOCOL
            </div>
            <p className="mt-1 text-xs text-typography-muted">
              Connect directly via verified transmission. All fields are client-validated.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs uppercase tracking-wider text-typography-secondary mb-2"
              >
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className={`w-full px-3.5 py-2.5 rounded bg-background border text-xs font-mono text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent transition-colors ${
                  errors.name ? 'border-red-500/70' : 'border-surface-border'
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-[11px] font-mono text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs uppercase tracking-wider text-typography-secondary mb-2"
              >
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className={`w-full px-3.5 py-2.5 rounded bg-background border text-xs font-mono text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent transition-colors ${
                  errors.email ? 'border-red-500/70' : 'border-surface-border'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-[11px] font-mono text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block font-mono text-xs uppercase tracking-wider text-typography-secondary mb-2"
            >
              Subject / Topic
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded bg-background border border-surface-border text-xs font-mono text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs uppercase tracking-wider text-typography-secondary mb-2"
            >
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your open role, project, or schedule an interview..."
              className={`w-full px-3.5 py-2.5 rounded bg-background border text-xs font-mono text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent transition-colors resize-y ${
                errors.message ? 'border-red-500/70' : 'border-surface-border'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-[11px] font-mono text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] font-mono text-typography-muted">
              Response SLA: &lt; 24h
            </span>
            <Button
              type="submit"
              disabled={status === 'submitting'}
              icon={
                status === 'submitting' ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )
              }
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
