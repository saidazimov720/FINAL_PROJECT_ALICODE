
export interface Media {
    id: string; 
    title: string; 
    subject: string; 
    description?: string; 
    url: string; 
  }
  

  export interface ApiResponse<T> {
    data: T; 
    message: string; 
    success: boolean; 
  }
  
 
  export const DEFAULT_SUBJECT = 'All';
  export const DEFAULT_QUERY = '';
  
  export const capitalize = (text: string): string => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  export const formatDescription = (description: string, maxLength: number = 100): string => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };
  