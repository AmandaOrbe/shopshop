module Spree::BaseHelper
     def logo(image_path = Spree::Config[:logo], img_options: {})
      link_to image_tag(image_path), spree.root_path
    end
end
