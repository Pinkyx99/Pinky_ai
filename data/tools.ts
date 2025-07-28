

import type { Tool } from '../types';
import {
  FaceSmileIcon, PhotoIcon, ImageIcon, ImageMagicIcon, TShirtIcon, MusicNoteIcon,
  CodeBracketIcon,
  ChatBubbleIcon,
  ObjectRemoverIcon,
  SwatchIcon,
  PencilIcon,
} from '../components/ui/Icons';

export const TOOLS: Tool[] = [
  // Images
  { id: 'image-generator', title: 'Image Generator', description: 'Alternative image generation via FLUX Pro.', path: '/image-generator', Icon: ImageIcon, category: 'Images', color: '#8b5cf6' },
  { id: 'image-to-image-ai', title: 'Image to Image AI', description: 'Re-imagine images with a text prompt', path: '/image-to-image-ai', Icon: ImageMagicIcon, category: 'Images', color: '#8b5cf6', isBeta: true },
  { id: 'obj-remover', title: 'AI Object Remover', description: 'Remove objects, people, or text', path: '/object-changer', Icon: ObjectRemoverIcon, category: 'Images', color: '#8b5cf6' },
  { id: 'bg-remover', title: 'Background remover', description: 'Instantly remove image backgrounds', path: '/background-remover', Icon: PhotoIcon, category: 'Images', color: '#8b5cf6' },
  { id: 'face-swapper', title: 'Face-swapper', description: 'Instantly swap faces between photos', path: '/face-swapper', Icon: FaceSmileIcon, category: 'Images', color: '#8b5cf6' },
  { id: 'video-face-swapper', title: 'Video Face Swapper', description: 'Swap faces in video clips', path: '/video-face-swapper', Icon: FaceSmileIcon, category: 'Images', color: '#8b5cf6' },
  { id: 'image-stylizer', title: 'Image Stylizer', description: 'Transfer the style of one image to another', path: '/image-stylizer', Icon: SwatchIcon, category: 'Images', color: '#8b5cf6' },
  { id: 'photo-colorizer', title: 'Photo Colorizer', description: 'Bring B&W photos to life with color', path: '/photo-colorizer', Icon: SwatchIcon, category: 'Images', color: '#8b5cf6' },
  
  // Builders
  { id: 'virtual-try-on', title: 'Virtual Try-On', description: 'See how clothes look on a model', path: '/virtual-try-on', Icon: TShirtIcon, category: 'Builders', color: '#8b5cf6' },
  
  // Coding
  { id: 'anycoder', title: 'AnyCoder', description: 'Advanced AI coding assistant.', path: '/anycoder', Icon: CodeBracketIcon, category: 'Coding', color: '#8b5cf6' },
  { id: 'instant-coder', title: 'Instant Coder', description: 'Get code snippets instantly from a prompt', path: '/instant-coder', Icon: CodeBracketIcon, category: 'Coding', color: '#8b5cf6' },
  { id: 'qwen-coder', title: 'Qwen Coder', description: 'Code generation with Qwen2.5', path: '/qwen-coder', Icon: CodeBracketIcon, category: 'Coding', color: '#8b5cf6' },
  
  // Creativity
  { id: 'ai-chat', title: 'AI Chat', description: 'Chat with a versatile AI model.', path: '/ai-chat', Icon: ChatBubbleIcon, category: 'Creativity', color: '#8b5cf6' },
  { id: 'gemini-codrawing', title: 'Gemini Co-Drawing', description: 'Draw and create images together with a Gemini-powered AI.', path: '/gemini-codrawing', Icon: PencilIcon, category: 'Creativity', color: '#8b5cf6' },

  // Motion
  { id: 'text-to-song', title: 'Text To Song', description: 'Generate melodies from text prompts', path: '/text-to-song', Icon: MusicNoteIcon, category: 'Motion', color: '#8b5cf6' },
  { id: 'doodle-animator', title: 'Doodle Animator', description: 'Animate your simple doodles and sketches', path: '/doodle-animator', Icon: PencilIcon, category: 'Motion', color: '#8b5cf6' },
];