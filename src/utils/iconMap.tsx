import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Download,
  Heart,
  Send,
  Zap,
  Play,
  ShoppingBag,
  Rocket,
  Terminal,
  Check,
  Flame,
  Shield,
  Star,
  Copy,
  ExternalLink,
  ChevronRight,
  Code,
  Layers,
  Cpu
} from 'lucide-react';

export const AVAILABLE_ICONS = [
  { id: 'ArrowRight', name: 'Mũi tên (ArrowRight)', component: ArrowRight },
  { id: 'Sparkles', name: 'Lấp lánh (Sparkles)', component: Sparkles },
  { id: 'Rocket', name: 'Tên lửa (Rocket)', component: Rocket },
  { id: 'Zap', name: 'Tia sét (Zap)', component: Zap },
  { id: 'Download', name: 'Tải về (Download)', component: Download },
  { id: 'Send', name: 'Gửi đi (Send)', component: Send },
  { id: 'Heart', name: 'Trái tim (Heart)', component: Heart },
  { id: 'ShoppingBag', name: 'Mua hàng (ShoppingBag)', component: ShoppingBag },
  { id: 'Play', name: 'Phát video (Play)', component: Play },
  { id: 'Flame', name: 'Ngọn lửa (Flame)', component: Flame },
  { id: 'Shield', name: 'Khiên bảo vệ (Shield)', component: Shield },
  { id: 'Terminal', name: 'Dòng lệnh (Terminal)', component: Terminal },
  { id: 'Star', name: 'Ngôi sao (Star)', component: Star },
  { id: 'ChevronRight', name: 'Mũi tên nhỏ (ChevronRight)', component: ChevronRight },
  { id: 'Cpu', name: 'Vi xử lý (Cpu)', component: Cpu },
  { id: 'Layers', name: 'Lớp layer (Layers)', component: Layers },
];

export function renderButtonIcon(iconName: string, className = 'w-4 h-4'): React.ReactNode {
  switch (iconName) {
    case 'ArrowRight':
      return <ArrowRight className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Rocket':
      return <Rocket className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Download':
      return <Download className={className} />;
    case 'Send':
      return <Send className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    case 'Play':
      return <Play className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Terminal':
      return <Terminal className={className} />;
    case 'Star':
      return <Star className={className} />;
    case 'Check':
      return <Check className={className} />;
    case 'Copy':
      return <Copy className={className} />;
    case 'ExternalLink':
      return <ExternalLink className={className} />;
    case 'Code':
      return <Code className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'ChevronRight':
    default:
      return <ChevronRight className={className} />;
  }
}
